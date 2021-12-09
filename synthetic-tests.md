# CPU Test

Command: `sysbench --test=cpu --cpu-max-prime=20000 run`

## Results current Hoster

```bash
WARNING: the --test option is deprecated. You can pass a script name or path on the command line without any options.
sysbench 1.0.11 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Prime numbers limit: 20000

Initializing worker threads...

Threads started!

CPU speed:
    events per second:   510.90

General statistics:
    total time:                          10.0006s
    total number of events:              5110

Latency (ms):
         min:                                  1.71
         avg:                                  1.96
         max:                                  3.24
         95th percentile:                      2.11
         sum:                               9997.95

Threads fairness:
    events (avg/stddev):           5110.0000/0.00
    execution time (avg/stddev):   9.9979/0.00
```

## Results Kubernetes Hoster

```bash
WARNING: the --test option is deprecated. You can pass a script name or path on the command line without any options.
sysbench 1.0.18 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Prime numbers limit: 20000

Initializing worker threads...

Threads started!

CPU speed:
    events per second:   306.70

General statistics:
    total time:                          10.0021s
    total number of events:              3069

Latency (ms):
         min:                                    2.57
         avg:                                    3.26
         max:                                   11.24
         95th percentile:                        4.18
         sum:                                 9997.93

Threads fairness:
    events (avg/stddev):           3069.0000/0.00
    execution time (avg/stddev):   9.9979/0.00
```

# RAM Test

Command: `sysbench --test=memory run`

## Results current Hoster

```bash
WARNING: the --test option is deprecated. You can pass a script name or path on the command line without any options.
sysbench 1.0.11 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Running memory speed test with the following options:
  block size: 1KiB
  total size: 102400MiB
  operation: write
  scope: global

Initializing worker threads...

Threads started!

Total operations: 58854680 (5884470.95 per second)

57475.27 MiB transferred (5746.55 MiB/sec)


General statistics:
    total time:                          10.0000s
    total number of events:              58854680

Latency (ms):
         min:                                  0.00
         avg:                                  0.00
         max:                                  0.38
         95th percentile:                      0.00
         sum:                               4595.95

Threads fairness:
    events (avg/stddev):           58854680.0000/0.00
    execution time (avg/stddev):   4.5959/0.00
```

## Results Kubernetes Hoster
```bash
WARNING: the --test option is deprecated. You can pass a script name or path on the command line without any options.
sysbench 1.0.18 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Running memory speed test with the following options:
  block size: 1KiB
  total size: 102400MiB
  operation: write
  scope: global

Initializing worker threads...

Threads started!

Total operations: 39957138 (3994294.02 per second)

39020.64 MiB transferred (3900.68 MiB/sec)


General statistics:
    total time:                          10.0001s
    total number of events:              39957138

Latency (ms):
         min:                                    0.00
         avg:                                    0.00
         max:                                    3.10
         95th percentile:                        0.00
         sum:                                 4706.03

Threads fairness:
    events (avg/stddev):           39957138.0000/0.00
    execution time (avg/stddev):   4.7060/0.00
```

# Disk Test

Command: `sysbench --test=fileio --file-test-mode=seqwr run`

## Results current Hoster

```bash
WARNING: the --test option is deprecated. You can pass a script name or path on the command line without any options.
sysbench 1.0.11 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Extra file open flags: 0
128 files, 16MiB each
2GiB total file size
Block size 16KiB
Periodic FSYNC enabled, calling fsync() each 100 requests.
Calling fsync() at the end of test, Enabled.
Using synchronous I/O mode
Doing sequential write (creation) test
Initializing worker threads...

Threads started!


File operations:
    reads/s:                      0.00
    writes/s:                     26976.88
    fsyncs/s:                     34529.41

Throughput:
    read, MiB/s:                  0.00
    written, MiB/s:               421.51

General statistics:
    total time:                          10.0001s
    total number of events:              616046

Latency (ms):
         min:                                  0.00
         avg:                                  0.02
         max:                                 17.45
         95th percentile:                      0.02
         sum:                               9829.35

Threads fairness:
    events (avg/stddev):           616046.0000/0.00
    execution time (avg/stddev):   9.8294/0.00
```

## Results Kubernetes Hoster

```bash
WARNING: the --test option is deprecated. You can pass a script name or path on the command line without any options.
sysbench 1.0.18 (using system LuaJIT 2.1.0-beta3)

Running the test with following options:
Number of threads: 1
Initializing random number generator from current time


Extra file open flags: (none)
128 files, 16MiB each
2GiB total file size
Block size 16KiB
Periodic FSYNC enabled, calling fsync() each 100 requests.
Calling fsync() at the end of test, Enabled.
Using synchronous I/O mode
Doing sequential write (creation) test
Initializing worker threads...

Threads started!


File operations:
    reads/s:                      0.00
    writes/s:                     7786.80
    fsyncs/s:                     9974.79

Throughput:
    read, MiB/s:                  0.00
    written, MiB/s:               121.67

General statistics:
    total time:                          10.0126s
    total number of events:              177789

Latency (ms):
         min:                                    0.01
         avg:                                    0.06
         max:                                   52.74
         95th percentile:                        0.06
         sum:                                 9886.53

Threads fairness:
    events (avg/stddev):           177789.0000/0.00
    execution time (avg/stddev):   9.8865/0.00
```
