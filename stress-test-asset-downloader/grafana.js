import 'dotenv/config';
import axios from "axios";
import fs from "fs";

async function fetchGraph(start, end, namespace, pod, panel) {
    const res = await axios({
        method: 'get',
        headers: {
            Cookie: process.env.GRAFANA_COOKIE
        },
        params: {
            orgId: 1,
            from: start,
            to: end,
            panelId: panel,
            width: 800,
            height: 300,
            tz: "Europe/Berlin",
            theme: "light",
            'var-namespace': namespace,
            'var-pod': pod
        },
        url: process.env.GRAFANA_URL,
        responseType: 'arraybuffer'
    });

    return res.data;
}

function createDir(dir) {
    if (!fs.existsSync(dir)) {
        return fs.mkdirSync(dir, { recursive: true });
    }
}

function writeFile(dir, service, graph, data) {
    return fs.writeFileSync(`${dir}/${service}-${graph}.png`, Buffer.from(data, 'binary'));
}

const DATA = {
    graphs: {
        cpu: 1,
        throttled: 2,
        ram: 4,
    },
    services: {
        application: [
            "application-55d95cff84-2bfxl",
            "application-55d95cff84-6rtrp",
            "application-mysql-primary-0",
            "application-mysql-secondary-0",
            "application-redis-master-0",

            "application-55d95cff84-x596q",
            "application-55d95cff84-v75f7",
        ],
        elasticsearch: [
            "makaira-shared-0",
            "makaira-shared-1"
        ]
    },
    entries: [
        {
            name: '10rps/kubernetes',
            start: '1635946800000',
            end: '1635947460000',
        },
        {
            name: '20rps/kubernetes',
            start: '1635948540000',
            end: '1635949260000'
        },
        {
            name: '50rps/kubernetes',
            start: '1635947760000',
            end: '1635948480000'
        }
    ]
};

(async () => {
    for (const graphName in DATA.graphs) {
        const graphId = DATA.graphs[graphName];
        for (const namespace in DATA.services) {
            for (const service of DATA.services[namespace]) {
                for (const { name, start, end } of DATA.entries) {
                    console.log(`Download ${namespace}/${service}/${graphName}`)
                    const res = await fetchGraph(start, end, namespace, service, graphId);
                    createDir(`${name}/${service}`);
                    writeFile(name, service, graphName, res);
                }
            }
        }
    }
})();
