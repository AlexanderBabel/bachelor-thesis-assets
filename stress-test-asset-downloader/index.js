import 'dotenv/config';
import axios from "axios";
import fs from "fs";

async function fetchGraph(start, end, graphId) {
    const res = await axios({
        method: 'get',
        headers: {
            Cookie: process.env.COOKIE
        },
        params: {
            graphid: graphId,
            from: start,
            to: end,
            height: 150,
            width: 800,
            profileIdx: "web.charts.filter",
            // _: filter
        },
        url: process.env.URL,
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
        app1: {
            ram: 394384,
            throttled: 394387,
            cpu: 394388
        }, // 8
        app2: {
            ram: 394396,
            throttles: 394399,
            cpu: 394400
        },
        db1: {
            ram: 394408,
            throttles: 394411, // 3
            cpu: 394412
        },
        db2: {
            ram: 394420,
            throttles: 394423,
            cpu: 394424
        },
        es1: {
            ram: 395600,
            throttles: 395603,
            cpu: 395604
        },
        es2: {
            ram: 395612,
            throttles: 395615,
            cpu: 395616
        },
    },
    services: {
        app1: 'v5mompp3',
        app2: 'v5mrclqu',
        db1: 'v5mrd9px',
        db2: 'v5mrdln2',
        es1: 'v5mrdwp3',
        es2: 'v5mrea9c'
    },
    entries: [
        {
            name: '10rps/virtual',
            start: '2021-11-02 14:48:00',
            end: '2021-11-02 14:59:00',
        },
        {
            name: '20rps/virtual',
            start: '2021-11-02 15:00:00',
            end: '2021-11-02 15:10:00'
        },
        {
            name: '50rps/virtual',
            start: '2021-11-02 15:32:00',
            end: '2021-11-02 15:42:00'
        }
    ]
};

(async () => {
    await Promise.all(Object.keys(DATA.graphs).map(serviceName => {
        return Promise.all(Object.keys(DATA.graphs[serviceName]).map(graphName => {
            const graphId = DATA.graphs[serviceName][graphName];
            return Promise.all(DATA.entries.map(async ({ name, start, end }) => {
                const res = await fetchGraph(start, end, graphId);
                createDir(`${name}`);
                writeFile(name, serviceName, graphName, res);
            }));
        }));
    }));
})();
