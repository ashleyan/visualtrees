function mFunction(x) {
    var chart_config = {
        chart: {
            container: "#basic-example",
            
            connectors: {
                type: 'step'
            },
            node: {
                HTMLclass: 'nodeExample1'
            }
        },
        nodeStructure: {
            text: {
                name: "Mark Hill",
                title: "Chief executive officer",
                contact: "Tel: 01 213 123 134",
            },
            children: [
                {
                    text:{
                        name: x, // this should change depending on user input
                        title: "Chief Technology Officer",
                    },
                    stackChildren: true,
                    children: [
                        {
                            text:{
                                name: "Ron Blomquist",
                                title: "Chief Information Security Officer"
                            },
                        },
                        {
                            text:{
                                name: "Michael Rubin",
                                title: "Chief Innovation Officer",
                                contact: "we@aregreat.com"
                            },
                        }
                    ]
                },
                {
                    stackChildren: true,
                    text:{
                        name: "Linda May",
                        title: "Chief Business Officer",
                    },
                    children: [
                        {
                            text:{
                                name: "Alice Lopez",
                                title: "Chief Communications Officer"
                            },
                        },
                        {
                            text:{
                                name: "Mary Johnson",
                                title: "Chief Brand Officer"
                            },
                        },
                        {
                            text:{
                                name: "Kirk Douglas",
                                title: "Chief Business Development Officer"
                            },
                        }
                    ]
                },
                {
                    text:{
                        name: "John Green",
                        title: "Chief accounting officer",
                        contact: "Tel: 01 213 123 134",
                    },
                    children: [
                        {
                            text:{
                                name: "Erica Reel",
                                title: "Chief Customer Officer"
                            },
                            link: {
                                href: "http://www.google.com"
                            },
                        }
                    ]
                }
            ]
        }
    };

    return chart_config;
}
