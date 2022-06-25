window.onload=function(){
    window.addEventListener('scroll',e=>{
        console.log(window.scrollY)})
    lax.init();
    lax.addDriver('scrollY',function(){
        return window.scrollY;
    });
    lax.addElements('.logo',{
    scrollY:{
        scale:[
            [0,80],
            [1,3]
        ],
        opacity:[
            [0,70],
            [1,0]
        ],
        translateY:[
            [0,80],
            [0,200],
        ]

    }
    });
    lax.addElements('.ultron',{
        scrollY:{
            opacity:[
                [0,80],
                [0,1]
            ],
            translateY:[
                [0,400],
                [0,0],
            ]
        }
        });
    lax.addElements('.loki',{
            scrollY:{
                opacity:[
                    [40,120],
                    [0,1]
                ],
                translateY:[
                    [0,400],
                    [0,-80],
                ]
            }
            });
    lax.addElements('.thanos',{
                scrollY:{
                    opacity:[
                        [80,160],
                        [0,1]
                    ],
                    translateY:[
                        [0,400],
                        [0,80],
                    ]
            
                }
                });
    lax.addElements('.scroll-tip',{
    scrollY:{
        opacity:[
        [0,800],
        [1,0]
        ],
     translateY:[
        [0,800],
        [-200,0],
        ],
    "letter-spacing":[
        [0,600],
        [0,150],{
            cssUnit:"px",
        }
    ]                
}}
);
//ironman titulo
lax.addElements('.ironman-title',{
    scrollY:{
        filter:[
        [800,900,1200,1300,1400],
        [0,50,0,50,0],{
            cssFn: function(value){
                return `drop-shadow(0 0 ${value}px yellow)`;
            }
        }
        ],              
        translateY:[
            [800,1300],
            [100,"elCenterY-150"],
        ]
    }}   
);
lax.addElements(".ironman-01",{
    scrollY: {
        translateY:[
            [800,1400],
            [100,-1000],
        ],
    }
});
lax.addElements(".ironman-02",{
    scrollY: {
        scale:[
            [1300,2000],
            [0,2]
        ],
        translateX:[
            [1300,1400,2400],
            [0,1000,0],
        ],
        translateY:[
            [1300,1400,2400],
            [-500,0,-400],
        ],
    }
});
lax.addElements(".shield",{
    scrollY: {
        translateX:[
            [2100,2370,2500,2700],
            [-400,"screenWidth - 200",0,"screenWidth + 200"],
        ],
        translateY:[
            [2100,2370,2600,2800],
            [0,400,600,800],
        ],
    }
});
lax.addElements(".captain-title",{
    scrollY: {
        filter:[
        [2100,2200,2500,2600,2800],
        [0,50,0,50,0],{
            cssFn: function(value){
                return `drop-shadow(0 0 ${value}px blue)`;
            }
        }
        ],
        translateY:[
            [1900,2700],
            [40,900],
        ],
    }
});
// lax.addElements(".capitan",{
//         translateX:[
//             [2900,3100],
//             [400,-800],
//         ],
//         // translateY:[
//         //     [2900,3100],
//         //     [600,600],
//         // ],
//     });
};
