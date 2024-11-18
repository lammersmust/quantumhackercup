import{_ as a}from"./Bvl5YsI0.js";import{_ as s}from"./D2FOu4hU.js";import{_ as r,n as m,w as e,u as w,o as p,a as n,d as t,b as h,P as d}from"./BUXv2e4z.js";import"./BJzL2lT2.js";const y={};function g(o,l){const i=a,u=s;return p(),m(u,{title:"Problem C: Substantial Losses",points:("PROBLEMS_POINTS"in o?o.PROBLEMS_POINTS:w(d)).C},{default:e(()=>[l[2]||(l[2]=n("p",null," You currently weigh W units, but you would ideally weigh G < W units. On some days you have the mental fortitude to eat well and exercise. On other days, not so much. Every day, with equal likelihood, your weight will either increase or decrease by 1 unit. ",-1)),l[3]||(l[3]=n("p",null," While your regimen may be lax, you do have one strict rule: if your weight has ever been w units, then you will never in the future allow it to exceed w + L. On any day where gaining 1 unit of weight would violate this constraint, you will guarantee that you lose 1 unit of weight instead. ",-1)),l[4]||(l[4]=n("p",null,[t(" On average, how many days will it take you to reach a weight of G units? The answer can be expressed as the ratio of two integers, p / q in lowest terms. Output "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"p"),n("mo",null,"×"),n("msup",null,[n("mi",null,"q"),n("mrow",null,[n("mo",null,"−"),n("mn",null,"1")])])]),n("annotation",{encoding:"application/x-tex"},"p \\times q^{-1}")])]),t(" (mod 998,244,353). ")],-1)),l[5]||(l[5]=n("p",null,[t(" ("),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mi",null,"a"),n("mrow",null,[n("mo",null,"−"),n("mn",null,"1")])])]),n("annotation",{encoding:"application/x-tex"},"a^{-1}")])]),t(" is the unique positive integer less than 998,244,353 that satisfies "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"a"),n("mo",null,"×"),n("msup",null,[n("mi",null,"a"),n("mrow",null,[n("mo",null,"−"),n("mn",null,"1")])]),n("mo",null,"≡"),n("mn",null,"1")]),n("annotation",{encoding:"application/x-tex"},"a \\times a^{-1} \\equiv 1")])]),t(" (mod 998,244,353)). ")],-1)),l[6]||(l[6]=n("h2",null,"Constraints",-1)),l[7]||(l[7]=n("p",null,[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"≤"),n("mi",null,"T"),n("mo",null,"≤"),n("mn",null,"90")]),n("annotation",{encoding:"application/x-tex"},"1 \\leq T \\leq 90")])]),n("br"),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"≤"),n("mi",null,"G"),n("mo",null,"<"),n("mi",null,"W"),n("mo",null,"≤"),n("mn",null,"1"),n("msup",null,[n("mn",null,"0"),n("mn",null,"18")])]),n("annotation",{encoding:"application/x-tex"},"1 \\leq G \\lt W \\leq 10^{18}")])]),n("br"),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"0"),n("mo",null,"≤"),n("mi",null,"L"),n("mo",null,"≤"),n("mn",null,"1"),n("msup",null,[n("mn",null,"0"),n("mn",null,"18")])]),n("annotation",{encoding:"application/x-tex"},"0 \\leq L \\leq 10^{18}")])])],-1)),l[8]||(l[8]=n("h2",null,"Input Format",-1)),l[9]||(l[9]=n("p",null," Input begins with an integer T, the number of test cases. Each case is a single line with the integers W, G, and L. ",-1)),l[10]||(l[10]=n("h2",null,"Output Format",-1)),l[11]||(l[11]=n("p",null,' For the ith test case, print "Case #i: " followed by the expected number of days it will take you to reach a weight of G units, expressed as described above. ',-1)),l[12]||(l[12]=n("h2",null,"Sample Explanation",-1)),l[13]||(l[13]=n("p",null," In the first case, you weigh 201 units and wish to reach a weight of 200 units. You'll allow yourself to weigh 1 beyond your lowest weight, so on the first day you either lose 1 unit and stop, or you gain 1 unit, and then force yourself to lose 1 unit, returning back to 201 units. ",-1)),l[14]||(l[14]=n("p",null," So there's a 1/2 probability of finishing in 1 1 day, a 1/4 probability of 3 days, a 1/8 probability of 5 days, and so on. The sum of this series converges to 3 days on average. ",-1)),l[15]||(l[15]=n("p",null,[t(" In the fourth case you aren't allowed to ever gain weight, so you'll reach your goal in "),n("code",null,"77,665,544,332,211 − 11,223,344,556,677 = 66,442,199,775,534"),t(" days. "),n("code",null,"66,442,199,775,534 % 99,8244,353 = 53,884,207"),t(", the final answer. ")],-1)),h(i,null,{input:e(()=>l[0]||(l[0]=[n("pre",null,`5
201 200 1
185 183 2
250 180 0
77665544332211 11223344556677 0
83716485936440 64528193749358 1938563682`,-1)])),output:e(()=>l[1]||(l[1]=[n("pre",null,`Case #1: 3
Case #2: 10
Case #3: 70
Case #4: 53884207
Case #5: 306870714`,-1)])),_:1})]),_:1},8,["points"])}const L=r(y,[["render",g]]);export{L as default};