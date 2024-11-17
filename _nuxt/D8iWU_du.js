import{_ as a}from"./DqavkE00.js";import{_ as m}from"./DWbkUzEW.js";import{p as r,_ as u,n as p,w as l,u as h,o as w,a as n,d as e,b as d,P as c}from"./C96SM8jO.js";import"./o0CDjoYD.js";const g=r("/img/chart-1.jpg"),f={};function x(o,t){const s=a,i=m;return w(),p(i,{title:"Problem A: Subsonic Subway",points:("PROBLEMS_POINTS"in o?o.PROBLEMS_POINTS:h(c)).A},{default:l(()=>[t[2]||(t[2]=n("p",null," When he's not busy fighting with Dr. Robotnik, Sonic makes a living delivering submarine sandwiches via an empty subway tunnel. The tunnel goes past N stations, numbered from 1 to N. Station i is located i miles away from Sonic, who plans to run from one end of the tunnel to the other, tossing a sandwich to an awaiting customer at every station. ",-1)),t[3]||(t[3]=n("p",null,[e(" At each station, a customer is scheduled to meet Sonic within an expected delivery window. Sonic can deliver a sandwich to station i only if he arrives within the inclusive interval "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mo",{stretchy:"false"},"["),n("msub",null,[n("mi",null,"A"),n("mi",null,"i")]),n("mo",{separator:"true"},","),n("msub",null,[n("mi",null,"B"),n("mi",null,"i")]),n("mo",{stretchy:"false"},"]")]),n("annotation",{encoding:"application/x-tex"},"[A_i, B_i]")])]),e(" seconds. ")],-1)),t[4]||(t[4]=n("p",null," Chasing Dr. Robotnik is tiring enough, so Sonic doesn't want to exert himself more than he has to. If he runs at a constant speed, what’s the minimum speed, in miles per second, that will allow him to deliver to every station? If no such constant speed exists, output − 1. ",-1)),t[5]||(t[5]=n("p",null,[e(" Your answer will be accepted if it is within an absolute or relative error of "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("msup",null,[n("mn",null,"0"),n("mrow",null,[n("mo",null,"−"),n("mn",null,"6")])])]),n("annotation",{encoding:"application/x-tex"},"10^{-6}")])]),e(" (even if the expected answer is −1). ")],-1)),t[6]||(t[6]=n("h2",null,"Constraints",-1)),t[7]||(t[7]=n("p",null,[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"≤"),n("mi",null,"T"),n("mo",null,"≤"),n("mn",null,"95")]),n("annotation",{encoding:"application/x-tex"},"1 \\leq T \\leq 95")])]),n("br"),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"≤"),n("mi",null,"N"),n("mo",null,"≤"),n("mn",null,"1"),n("mo",{separator:"true",lspace:"0em",rspace:"0em"},","),n("mn",null,"000"),n("mo",{separator:"true",lspace:"0em",rspace:"0em"},","),n("mn",null,"000")]),n("annotation",{encoding:"application/x-tex"},"1 \\leq N \\leq 1{,}000{,}000")])]),n("br"),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0"),n("mo",null,"≤"),n("msub",null,[n("mi",null,"A"),n("mi",null,"i")]),n("mo",null,"<"),n("msub",null,[n("mi",null,"B"),n("mi",null,"i")]),n("mo",null,"≤"),n("mn",null,"1"),n("mo",{separator:"true",lspace:"0em",rspace:"0em"},","),n("mn",null,"000"),n("mo",{separator:"true",lspace:"0em",rspace:"0em"},","),n("mn",null,"000")]),n("annotation",{encoding:"application/x-tex"},"0 \\leq A_i \\lt B_i \\leq 1{,}000{,}000")])])],-1)),t[8]||(t[8]=n("p",null,"The sum of N across all test cases is at most 5,000,000.",-1)),t[9]||(t[9]=n("h2",null,"Input Format",-1)),t[10]||(t[10]=n("p",null,[e(" Input begins with an integer T, the number of test cases. Each case starts with a line containing the integer N. Then, N lines follow, the ith of which contains the integers "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"A"),n("mi",null,"i")])]),n("annotation",{encoding:"application/x-tex"},"A_i")])]),e(" and "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"B"),n("mi",null,"i")])]),n("annotation",{encoding:"application/x-tex"},"B_i")])]),e(" . ")],-1)),t[11]||(t[11]=n("h2",null,"Output Format",-1)),t[12]||(t[12]=n("p",null,` For the ith test case, print "Case #i: " followed by the minimum constant speed, in miles per second, that Sonic can run that will get him to each door while it's open, or −1 if no such constant speed exists. `,-1)),t[13]||(t[13]=n("h2",null,"Sample Explanation",-1)),t[14]||(t[14]=n("p",null," In the first case, Sonic needs to reach the station 3 miles away within 10 seconds, so he can run at a speed of 3/10=0.3 miles per second. ",-1)),t[15]||(t[15]=n("p",null," The second case is depicted below, with delivery windows in green, and Sonic's path in blue. The last station's delivery window is wide, so the third station is the one that Sonic really has to run to get to. It's 3 miles away and he needs to get there within 2 seconds, so he'll run at a speed of 3/2=1.5 miles per second. ",-1)),t[16]||(t[16]=n("p",null,[n("img",{src:g,width:"400",height:"394",alt:""})],-1)),t[17]||(t[17]=n("p",null," In the third case, the first station's delivery window doesn't open until the second station's closes, so there's no constant speed that lets Sonic deliver both sandwiches. ",-1)),t[18]||(t[18]=n("p",null," In the fourth case, a speed of 0.5 miles per second gets Sonic to catch the first station right as the delivery window closes, and the second station right as the delivery window opens. ",-1)),d(s,null,{input:l(()=>t[0]||(t[0]=[n("pre",null,`4
3
0 10
0 10
0 10
4
0 3
1 4
1 2
0 10
2
5 10
0 5
2
1 2
4 10`,-1)])),output:l(()=>t[1]||(t[1]=[n("pre",null,`Case #1: 0.3
Case #2: 1.5
Case #3: -1
Case #4: 0.5`,-1)])),_:1})]),_:1},8,["points"])}const v=u(f,[["render",x]]);export{v as default};
