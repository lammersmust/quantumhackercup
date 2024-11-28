import{_ as r}from"./BqdexuIt.js";import{_ as a}from"./CsJap-5M.js";import{_ as u,n as m,w as l,u as p,o as d,a as n,d as e,b as h,P as w}from"./DIdaT3oj.js";import"./CFaCMZmV.js";const g={};function f(s,t){const i=r,o=a;return d(),m(o,{title:"Problem E: Pattern Tree",points:("PROBLEMS_POINTS"in s?s.PROBLEMS_POINTS:p(w)).E},{default:l(()=>[t[2]||(t[2]=n("p",null," A trie is a tree data structure where each node represents a prefix of a string. When a string s is inserted into a trie, up to ∣s∣+1 nodes may be added if they do not already exist: ",-1)),t[3]||(t[3]=n("ul",null,[n("li",null,"A node representing the empty string, '', which is always the root of the trie."),n("li",null,"A node representing the first character of s, as a child of the root."),n("li",null,"A node representing the first two characters of s, as a child of the previous node."),n("li",null,"... and so on for each subsequent character.")],-1)),t[4]||(t[4]=n("p",null,[e(" You have N wildcard strings, "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"S"),n("mn",null,"1")])]),n("annotation",{encoding:"application/x-tex"},"S_1")])]),e(" through "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"S"),n("mi",null,"N")])]),n("annotation",{encoding:"application/x-tex"},"S_N")])]),e(" , each consisting of uppercase English letters and question marks. A wildcard string represents all possible strings formed by replacing each question mark with any uppercase English letter. ")],-1)),t[5]||(t[5]=n("p",null," If you insert every possible string represented by each of your wildcard strings into a single trie (initially empty), how many nodes will the trie contain? Output this number modulo 998,244,353. ",-1)),t[6]||(t[6]=n("h2",null,"Constraints",-1)),t[7]||(t[7]=n("p",null,[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"≤"),n("mi",null,"T"),n("mo",null,"≤"),n("mn",null,"10"),n("msup",null,[n("mn",null,"5"),n("mn",null,"5")])]),n("annotation",{encoding:"application/x-tex"},"1 \\leq T \\leq 10^5")])]),n("br"),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"≤"),n("mi",null,"N"),n("mo",null,"≤"),n("mn",null,"25")]),n("annotation",{encoding:"application/x-tex"},"1 \\leq N \\leq 25")])]),n("br"),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mn",null,"1"),n("mo",null,"≤"),n("mi",null,"|"),n("msub",null,[n("mi",null,"S"),n("mi",null,"i")]),n("mi",null,"|"),n("mo",null,"≤"),n("mn",null,"100")]),n("annotation",{encoding:"application/x-tex"},"1 \\leq |S_i| \\leq 100")])])],-1)),t[8]||(t[8]=n("p",null,"All characters in the wildcard strings are uppercase English letters or question marks.",-1)),t[9]||(t[9]=n("h2",null,"Input Format",-1)),t[10]||(t[10]=n("p",null,[e(" The input begins with an integer T, the number of test cases. Each test case starts with a line containing the integer N. Then N lines follow, each containing the string "),n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msub",null,[n("mi",null,"S"),n("mi",null,"i")])]),n("annotation",{encoding:"application/x-tex"},"S_i")])]),e(" . ")],-1)),t[11]||(t[11]=n("h2",null,"Output Format",-1)),t[12]||(t[12]=n("p",null,' For the ith test case, print "Case #i: " followed by the number of nodes in the resulting trie, modulo 998,244,353. ',-1)),t[13]||(t[13]=n("h2",null,"Sample Explanation",-1)),t[14]||(t[14]=n("p",null,` In the first test case, we insert the string "NODE" into the trie, creating 5 nodes: [ '', N, NO, NOD, NODE ]. Inserting "DONE" creates nodes [ '', D, DO, DON, DONE ], but the root node '' already exists, so we create 4 new nodes. In total, the trie has 9 nodes. `,-1)),t[15]||(t[15]=n("p",null,` In the second test case, we insert the strings [ "AB", "BB", "CB", ..., "ZB" ] into the trie, which creates nodes for each letter and their combinations ending with 'B'. When we add the string "AC", it shares the node 'A', adding one new node 'C' under 'A'. `,-1)),t[16]||(t[16]=n("p",null," In the third test case, we insert all combinations of two letters, resulting in 1 node for the empty string, 26 nodes for single letters, and 676 nodes for all pairs of letters, totaling 703 nodes. ",-1)),h(i,null,{input:l(()=>t[0]||(t[0]=[n("pre",null,`5
2
NODE
DONE
2
?B
AC
1
??
3
XXY
X?
?X
2
??N?O?D?E??
?N?O?D?E?`,-1)])),output:l(()=>t[1]||(t[1]=[n("pre",null,`Case #1: 9
Case #2: 54
Case #3: 703
Case #4: 79
Case #5: 392316013`,-1)])),_:1})]),_:1},8,["points"])}const O=u(g,[["render",f]]);export{O as default};
