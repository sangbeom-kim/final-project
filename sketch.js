//
//Title           : Final Project
//Name            : 김상범(Sangbeom Kim)
//Assignment Name : cs099 Final Project
//Course Number   : cs099s20
//Term & Year     : Spring 2020
//

let cameraX = 0
let cameraY = 0
let gameover = false
let jumpcount = 0
let gamestate = 0
let t = 0
let tt = 0
let g = 0
let b = 0
let bosx = 0
let screen = 0
let beat = 1
let life = 3
let story = 0
let again = 10000000
let damage1 = false
let damage2 = false
let boost1 = 0
let boost2 = 0
let onehit = false
let twohit = false
let eye = 0
let lid = 60
let bat = 60
let mouth = 90
let face = 0
let boss = 0
let ded = 0
let w = 700
let end = false
let end2 = false
let j = 100
let prison = 0
let free = 0
let tnks = -300
let fin = -1200
let owo = 0

function setup() {
  createCanvas(700, 500);
  U = new jelly(100, 470)
  t1 = new tri(5400, 500, 1)
  t2 = new tri(5600, 0, 1)
  t3 = new tri(5800, 500, 1)
  t4 = new tri(6000, 0, 1)
  t5 = new tri(6200, 500, 1)
  t6 = new tri(6400, 0, 1)
  t7 = new tri(6600, 500, 1)
  t8 = new tri(6800, 0, 1)
  t9 = new tri(7000, 500, 1)
  t10 = new tri(7200, 0, 1)
  t11 = new tri(7400, 500, 1)
  t12 = new tri(7600, 0, 1)
  t13 = new tri(7800, 500, 1.1)
  t14 = new tri(8000, 0, 1.1)
  t15 = new tri(8200, 500, 1.2)
  t16 = new tri(8400, 0, 1.2)
  t17 = new tri(8600, 500, 1.3)
  t18 = new tri(8800, 0, 1.3)
  t19 = new tri(9000, 500, 1.4)
  t20 = new tri(9190, 0, 1.4)
  t21 = new tri(9390, 500, 1.5)
  t22 = new tri(9580, 0, 1.5)
  t23 = new tri(9780, 500, 1.6)
  t24 = new tri(9970, 0, 1.6)
  t25 = new tri(10170, 500, 1.7)
  t26 = new tri(10360, 0, 1.7)
  t27 = new tri(10560, 500, 1.8)
  t28 = new tri(10750, 0, 1.8)
  t29 = new tri(10950, 500, 1.9)
  t30 = new tri(11150, 0, 1.9)
  t31 = new tri(11350, 500, 2)
  t32 = new tri(11550, 0, 2)
  t033 = new tri(14800, 500, 1)
  t034 = new tri(15000, 500, 1)
  t035 = new tri(15050, 500, 1.3)
  t036 = new tri(15250, 0, 1)
  t037 = new tri(15300, 0, 1)
  t038 = new tri(15370, 500, 1)
  t039 = new tri(15420, 500, 1)
  t040 = new tri(15600, 0, 1.5)
  t041 = new tri(15650, 0, 1.5)
  t042 = new tri(15700, 0, 1.5)
  t043 = new tri(15800, 500, 1)
  t044 = new tri(15850, 500, 1)
  t045 = new tri(15900, 500, 1)
  t046 = new tri(16000, 0, 1.5)
  t047 = new tri(16050, 0, 1.5)
  t048 = new tri(16100, 0, 1.5)
  t049 = new tri(16200, 500, 2)
  t050 = new tri(16390, 0, 1.5)
  t051 = new tri(16590, 500, 1)
  t052 = new tri(16640, 500, 1.3)
  t053 = new tri(16830, 0, 1)
  t054 = new tri(16880, 0, 1)
  t055 = new tri(16950, 500, 1)
  t056 = new tri(17000, 500, 1)
  t057 = new tri(17180, 0, 1.5)
  t058 = new tri(17230, 0, 1.5)
  t059 = new tri(17280, 0, 1.5)
  t060 = new tri(17380, 500, 1)
  t061 = new tri(17430, 500, 1)
  t062 = new tri(17480, 500, 1)
  t063 = new tri(17580, 0, 1.5)
  t064 = new tri(17630, 0, 1.5)
  t065 = new tri(17680, 0, 1.5)
  t066 = new tri(17780, 500, 2)
  s1 = new sqr(1720, 0, 1)
  s2 = new sqr(1725, 50, 1)
  s3 = new sqr(1730, 100, 1)
  t067 = new tri(17950, 0, 1.5)
  t068 = new tri(18100, 500, 1)
  t069 = new tri(18150, 500, 1.3)
  t070 = new tri(18350, 0, 1)
  t071 = new tri(18400, 0, 1)
  t072 = new tri(18450, 500, 1)
  t073 = new tri(18500, 500, 1)
  t074 = new tri(18700, 500, 1)
  t075 = new tri(18700, 0, 1)
  t076 = new tri(189000, 500, 1)
  t077 = new tri(189000, 0, 1)
  t078 = new tri(19100, 500, 1)
  t079 = new tri(19100, 0, 1)
  t080 = new tri(194000, 500, 1)
  t081 = new tri(194000, 0, 1)
  s4 = new sqr(1880, 450, 1)
  s5 = new sqr(1885, 400, 1)
  s6 = new sqr(1890, 350, 1)
  t082 = new tri(19580, 0, 1.5)
  t083 = new tri(19700, 500, 1)
  t084 = new tri(19750, 500, 1)
  t085 = new tri(19800, 500, 1)
  t086 = new tri(19900, 0, 1.5)
  t087 = new tri(19950, 0, 1.5)
  t088 = new tri(20000, 0, 1.5)
  t089 = new tri(20100, 500, 2)
  t090 = new tri(20300, 500, 1)
  t091 = new tri(20300, 0, 1)
  t092 = new tri(207000, 500, 1)
  t093 = new tri(207000, 0, 1)
  s7 = new sqr(2040, 450, 1)
  s8 = new sqr(2045, 400, 1)
  s9 = new sqr(2050, 350, 1)
  t94 = new tri(21100, 500, 1)
  t95 = new tri(21220, 0, 1.5)
  t96 = new tri(21270, 0, 1.5)
  t97 = new tri(21320, 0, 1.5)
  t98 = new tri(21480, 500, 1)
  t99 = new tri(21530, 500, 1)
  t100 = new tri(21580, 500, 1)
  t101 = new tri(21730, 0, 1.5)
  t102 = new tri(21850, 500, 1)
  t103 = new tri(21900, 500, 1)
  t104 = new tri(21950, 500, 1)
  t105 = new tri(22050, 0, 1.5)
  t106 = new tri(22100, 0, 1.5)
  t107 = new tri(22150, 0, 1.5)
  t108 = new tri(22250, 500, 1)
  t109 = new tri(22300, 500, 1)
  t110 = new tri(22350, 500, 1)
  t111 = new tri(22450, 0, 1.5)
  t112 = new tri(2255000, 500, 2)
  s10 = new sqr(2195, 0, 1)
  s11 = new sqr(2200, 50, 1)
  s12 = new sqr(2205, 100, 1)
  t113 = new tri(22680, 500, 1)
  t114 = new tri(22820, 0, 1.5)
  t115 = new tri(22870, 0, 1.5)
  t116 = new tri(22920, 0, 1.5)
  t117 = new tri(23080, 500, 1)
  t118 = new tri(23130, 500, 1)
  t119 = new tri(23180, 500, 1)
  t120 = new tri(23330, 0, 1.5)
  t121 = new tri(23450, 500, 1)
  t122 = new tri(23500, 500, 1)
  t123 = new tri(23550, 500, 1)
  t124 = new tri(23650, 0, 1.5)
  t125 = new tri(23700, 0, 1.5)
  t126 = new tri(23750, 0, 1.5)
  t127 = new tri(23850, 500, 1)
  t128 = new tri(23900, 500, 1)
  t129 = new tri(23950, 500, 1)
  t130 = new tri(24050, 0, 1.5)
  t131 = new tri(2420000, 500, 2)
  s13 = new sqr(2355, 0, 1)
  s14 = new sqr(2360, 50, 1)
  s15 = new sqr(2365, 100, 1)
  t132 = new tri(24280, 500, 1)
  t133 = new tri(24420, 0, 1.5)
  t134 = new tri(24470, 0, 1.5)
  t135 = new tri(24520, 0, 1.5)
  t136 = new tri(24650, 500, 1)
  t137 = new tri(24700, 500, 1)
  t138 = new tri(24750, 500, 1)
  t139 = new tri(24850, 0, 1.5)
  t140 = new tri(25100, 500, 1)
  t141 = new tri(25100, 0, 1)
  t142 = new tri(25500, 500, 1)
  t143 = new tri(25500, 0, 1)
  s16 = new sqr(2515, 0, 1)
  s17 = new sqr(2520, 50, 1)
  s18 = new sqr(2525, 100, 1)
  t144 = new tri(25780, 500, 1)
  t145 = new tri(25920, 0, 1.5)
  t146 = new tri(25970, 0, 1.5)
  t147 = new tri(26020, 0, 1.5)
  t148 = new tri(26150, 500, 1)
  t149 = new tri(26200, 500, 1)
  t150 = new tri(26250, 500, 1)
  t151 = new tri(26350, 0, 1.5)
  t152 = new tri(26600, 500, 1)
  t153 = new tri(26600, 0, 1)
  t154 = new tri(27000, 500, 1)
  t155 = new tri(27000, 0, 1)
  s19 = new sqr(2675, 0, 1)
  s20 = new sqr(2680, 50, 1)
  s21 = new sqr(2685, 100, 1)
  s22 = new sqr2(-30, 0, 1.5, 410)
  s23 = new sqr2(640, 0, 1.5, 414)
  s24 = new sqr2(-30, 0, 1.5, 418)
  s25 = new sqr2(640, 0, 1.5, 422)
  s26 = new sqr2(-30, 0, 1.5, 426)
  s27 = new sqr2(640, 0, 1.5, 430)
  s28 = new sqr2(-30, 0, 1.5, 434)
  s29 = new sqr2(640, 0, 1.5, 438)
  s30 = new sqr2(-30, 0, 1.5, 442)
  s31 = new sqr2(640, 0, 1.5, 446)
  s32 = new sqr2(-30, 0, 1.5, 450)
  s33 = new sqr2(640, 0, 1.5, 454)
  s34 = new sqr2(-30, 0, 1.5, 458)
  s35 = new sqr2(640, 0, 1.5, 462)
  s36 = new sqr2(-30, 0, 1.5, 466)
  s37 = new sqr2(640, 0, 1.5, 470)
  s38 = new sqr2(-30, 0, 1.5, 474)
  s39 = new sqr2(640, 0, 1.5, 477)
  s40 = new sqr2(-30, 0, 1.5, 481)
  s41 = new sqr2(640, 0, 1.5, 485)
  s42 = new sqr2(-30, 0, 1.5, 489)
  s43 = new sqr2(640, 0, 1.5, 494)
  s44 = new sqr2(-30, 0, 1.5, 497)
  s45 = new sqr2(640, 0, 1.5, 501)
  s46 = new sqr2(-30, 0, 1.5, 505)
  s47 = new sqr2(640, 0, 1.5, 509)
  s48 = new sqr2(-30, 0, 1.5, 513)
  s49 = new sqr2(640, 0, 1.5, 517)
  s50 = new sqr2(-30, 0, 1.5, 521)
  s51 = new sqr2(640, 0, 1.5, 525)
  s52 = new sqr2(-30, 0, 1.5, 529)
  s53 = new sqr2(640, 0, 1.5, 533)
  t156 = new tri(27400, 500, 1)
  t157 = new tri(27400, 0, 1)
  t158 = new tri(27600, 0, 1)
  t159 = new tri(27600, 500, 1)
  t160 = new tri(27800, 500, 1)
  t161 = new tri(27800, 0, 1)
  t162 = new tri(28000, 500, 1)
  t163 = new tri(28000, 0, 1)
  t164 = new tri(28200, 500, 1)
  t165 = new tri(28200, 0, 1)
  s54 = new sqr(2785, 0, 1)
  s55 = new sqr(2790, 60, 1)
  s56 = new sqr(2795, 450, 1)
  s57 = new sqr(2800, 390, 1)
  t166 = new tri(28500, 0, 1)
  t167 = new tri(28550, 0, 1)
  t168 = new tri(28650, 500, 1)
  t169 = new tri(28700, 500, 1)
  t170 = new tri(28800, 0, 1)
  t171 = new tri(28900, 500, 1)
  t172 = new tri(28900, 0, 1)
  t173 = new tri(29100, 0, 1)
  t174 = new tri(29100, 500, 1)
  t175 = new tri(29300, 500, 1)
  t176 = new tri(29300, 0, 1)
  t177 = new tri(29500, 500, 1)
  t178 = new tri(29500, 0, 1)
  g1 = new gear(29700, 0, 2, 1, 1)
  g2 = new gear(29700, 500, 2, 1, 2)
  g3 = new gear(30100, 0, 2, 1, 1)
  g4 = new gear(30100, 500, 2, 1, 2)
  s58 = new sqr2(0, 0, 1, 16, true)
  s59 = new sqr2(650, 0, 1, 18, true)
  s60 = new sqr2(50, 0, 1, 20, true)
  s61 = new sqr2(600, 0, 1, 22, true)
  s62 = new sqr2(100, 0, 1, 24, true)
  s63 = new sqr2(550, 0, 1, 26, true)
  s64 = new sqr2(150, 0, 1, 28, true)
  s65 = new sqr2(500, 0, 1, 30, true)
  s66 = new sqr2(200, 0, 1, 32, true)
  s67 = new sqr2(450, 0, 1, 34, true)
  s68 = new sqr2(0, 0, 1, 18, true)
  s69 = new sqr2(0, 0, 1, 20, true)
  s70 = new sqr2(0, 0, 1, 22, true)
  s71 = new sqr2(0, 0, 1, 24, true)
  s72 = new sqr2(0, 0, 1, 26, true)
  s73 = new sqr2(0, 0, 1, 28, true)
  s74 = new sqr2(0, 0, 1, 30, true)
  s75 = new sqr2(0, 0, 1, 32, true)
  s76 = new sqr2(0, 0, 1, 34, true)
  s77 = new sqr2(650, 0, 1, 20, true)
  s78 = new sqr2(650, 0, 1, 22, true)
  s79 = new sqr2(650, 0, 1, 24, true)
  s80 = new sqr2(650, 0, 1, 26, true)
  s81 = new sqr2(650, 0, 1, 28, true)
  s82 = new sqr2(650, 0, 1, 30, true)
  s83 = new sqr2(650, 0, 1, 32, true)
  s84 = new sqr2(650, 0, 1, 34, true)
  s85 = new sqr2(50, 0, 1, 22, true)
  s86 = new sqr2(50, 0, 1, 24, true)
  s87 = new sqr2(50, 0, 1, 26, true)
  s88 = new sqr2(50, 0, 1, 28, true)
  s89 = new sqr2(50, 0, 1, 30, true)
  s90 = new sqr2(50, 0, 1, 32, true)
  s91 = new sqr2(50, 0, 1, 34, true)
  s92 = new sqr2(600, 0, 1, 24, true)
  s93 = new sqr2(600, 0, 1, 26, true)
  s94 = new sqr2(600, 0, 1, 28, true)
  s95 = new sqr2(600, 0, 1, 30, true)
  s96 = new sqr2(600, 0, 1, 32, true)
  s97 = new sqr2(600, 0, 1, 34, true)
  s98 = new sqr2(100, 0, 1, 26, true)
  s99 = new sqr2(100, 0, 1, 28, true)
  s100 = new sqr2(100, 0, 1, 30, true)
  s101 = new sqr2(100, 0, 1, 32, true)
  s102 = new sqr2(100, 0, 1, 34, true)
  s103 = new sqr2(550, 0, 1, 28, true)
  s104 = new sqr2(550, 0, 1, 30, true)
  s105 = new sqr2(550, 0, 1, 32, true)
  s106 = new sqr2(550, 0, 1, 34, true)
  s107 = new sqr2(150, 0, 1, 30, true)
  s108 = new sqr2(150, 0, 1, 32, true)
  s109 = new sqr2(150, 0, 1, 34, true)
  s110 = new sqr2(500, 0, 1, 32, true)
  s111 = new sqr2(500, 0, 1, 34, true)
  s112 = new sqr2(200, 0, 1, 34, true)
  s113 = new sqr2(250, 0, 4, 45, true)
  t179 = new tri(7400, 500, 1)
  t180 = new tri(7450, 500, 1.3)
  t181 = new tri(7500, 500, 1)
  t182 = new tri(-7300, 500, 1)
  t183 = new tri(-7350, 500, 1.3)
  t184 = new tri(-7400, 500, 1)
  t185 = new tri(8600, 500, 1)
  t186 = new tri(8650, 500, 1.3)
  t187 = new tri(8700, 500, 1)
  s114 = new sqr2(250, 0, 4, 61, true)
  t188 = new tri(-9200, 500, 1)
  t189 = new tri(-9250, 500, 1.3)
  t190 = new tri(-9300, 500, 1)
  t191 = new tri(10500, 500, 1)
  t192 = new tri(10550, 500, 1.3)
  t193 = new tri(10600, 500, 1)
  t194 = new tri(-10400, 500, 1)
  t195 = new tri(-10450, 500, 1.3)
  t196 = new tri(-10500, 500, 1)
  s115 = new sqr2(250, 0, 4, 77, true)
  t197 = new tri(12300, 500, 1)
  t198 = new tri(12350, 500, 1.3)
  t199 = new tri(12400, 500, 1)
  t200 = new tri(-12200, 500, 1)
  t201 = new tri(-12250, 500, 1.3)
  t202 = new tri(-12300, 500, 1)
  t203 = new tri(13500, 500, 1)
  t204 = new tri(13550, 500, 1.3)
  t205 = new tri(13600, 500, 1)
  s116 = new sqr2(250, 0, 4, 93, true)
  t206 = new tri(-14000, 500, 1)
  t207 = new tri(-14050, 500, 1.3)
  t208 = new tri(-14100, 500, 1)
  t209 = new tri(15300, 500, 1)
  t210 = new tri(15350, 500, 1.3)
  t211 = new tri(15400, 500, 1)
  t212 = new tri(-15200, 500, 1)
  t213 = new tri(-15250, 500, 1.3)
  t214 = new tri(-15300, 500, 1)
  s117 = new sqr2(250, 0, 4, 109, true)
  t215 = new tri(17100, 500, 1)
  t216 = new tri(17150, 500, 1.3)
  t217 = new tri(17200, 500, 1)
  t218 = new tri(-17000, 500, 1)
  t219 = new tri(-17050, 500, 1.3)
  t220 = new tri(-17100, 500, 1)
  t221 = new tri(18300, 500, 1)
  t222 = new tri(18350, 500, 1.3)
  t223 = new tri(18400, 500, 1)
  s118 = new sqr2(250, 0, 4, 124, true)
  t224 = new tri(-18700, 500, 1)
  t225 = new tri(-18750, 500, 1.3)
  t226 = new tri(-18800, 500, 1)
  t227 = new tri(20000, 500, 1)
  t228 = new tri(20050, 500, 1.3)
  t229 = new tri(20100, 500, 1)
  t230 = new tri(-19900, 500, 1)
  t231 = new tri(-19950, 500, 1.3)
  t232 = new tri(-20000, 500, 1)
  s119 = new sqr2(250, 0, 4, 139, true)
  t233 = new tri(21800, 500, 1)
  t234 = new tri(21850, 500, 1.3)
  t235 = new tri(21900, 500, 1)
  t236 = new tri(-21700, 500, 1)
  t237 = new tri(-21750, 500, 1.3)
  t238 = new tri(-21800, 500, 1)
  t239 = new tri(23000, 500, 1)
  t240 = new tri(23050, 500, 1.3)
  t241 = new tri(23100, 500, 1)
  g5 = new gear(23600, 500, 1.7, 1, 2)
  g6 = new gear(-23400, 500, 1.7, 1, 1)
  g7 = new gear(24700, 500, 1.7, 1, 2)
  g8 = new gear(50, 600, 1, 1, 1)
  g9 = new gear(150, 600, 1, 1, 2)
  g10 = new gear(250, 600, 1, 1, 1)
  g11 = new gear(350, 600, 1, 1, 2)
  g12 = new gear(450, 600, 1, 1, 1)
  g13 = new gear(550, 600, 1, 1, 2)
  g14 = new gear(650, 600, 1, 1, 1)
  s120 = new sqr2(0, 0, 5, 170, true)
  s121 = new sqr2(450, 0, 5, 1700, true)
  s122 = new sqr2(0, 0, 5, 1860, true)
  s123 = new sqr2(450, 0, 5, 186, true)
  s124 = new sqr2(0, 0, 5, 202, true)
  s125 = new sqr2(450, 0, 5, 2020, true)
  s126 = new sqr2(0, 0, 5, 2180, true)
  s127 = new sqr2(450, 0, 5, 218, true)
  s128 = new sqr2(0, 0, 5, 234, true)
  s129 = new sqr2(450, 0, 5, 2340, true)
  s130 = new sqr2(0, 0, 5, 2500, true)
  s131 = new sqr2(450, 0, 5, 250, true)
  s132 = new sqr2(0, 0, 5, 265, true)
  s133 = new sqr2(450, 0, 5, 2650, true)
  t242 = new tri(26250, 500, 1)
  t243 = new tri(26300, 500, 1.3)
  t244 = new tri(26350, 500, 1)
  t245 = new tri(-26150, 500, 1)
  t246 = new tri(-26200, 500, 1.3)
  t247 = new tri(-26250, 500, 1)
  t248 = new tri(27450, 500, 1)
  t249 = new tri(27500, 500, 1.3)
  t250 = new tri(27550, 500, 1)
  t251 = new tri(-28050, 500, 1)
  t252 = new tri(-28100, 500, 1.3)
  t253 = new tri(-28150, 500, 1)
  t254 = new tri(29350, 500, 1)
  t255 = new tri(29400, 500, 1.3)
  t256 = new tri(29450, 500, 1)
  t257 = new tri(-29250, 500, 1)
  t258 = new tri(-29300, 500, 1.3)
  t259 = new tri(-29350, 500, 1)
  t260 = new tri(31100, 500, 1)
  t261 = new tri(31150, 500, 1.3)
  t262 = new tri(31200, 500, 1)
  t263 = new tri(-31000, 500, 1)
  t264 = new tri(-31050, 500, 1.3)
  t265 = new tri(-31100, 500, 1)
  t266 = new tri(32300, 500, 1)
  t267 = new tri(32350, 500, 1.3)
  t268 = new tri(32400, 500, 1)
  t269 = new tri(-32800, 500, 1)
  t270 = new tri(-32850, 500, 1.3)
  t271 = new tri(-32900, 500, 1)
  t272 = new tri(34100, 500, 1)
  t273 = new tri(34150, 500, 1.3)
  t274 = new tri(34200, 500, 1)
  t275 = new tri(-34000, 500, 1)
  t276 = new tri(-34050, 500, 1.3)
  t277 = new tri(-34100, 500, 1)
  t278 = new tri(35900, 500, 1)
  t279 = new tri(35950, 500, 1.3)
  t280 = new tri(36000, 500, 1)
  t281 = new tri(-35800, 500, 1)
  t282 = new tri(-35850, 500, 1.3)
  t283 = new tri(-35900, 500, 1)
  t284 = new tri(37100, 500, 1)
  t285 = new tri(37150, 500, 1.3)
  t286 = new tri(37200, 500, 1)
  t287 = new tri(-37500, 500, 1)
  t288 = new tri(-37550, 500, 1.3)
  t289 = new tri(-37600, 500, 1)
  t290 = new tri(38800, 500, 1)
  t291 = new tri(38850, 500, 1.3)
  t292 = new tri(38900, 500, 1)
  t293 = new tri(-38700, 500, 1)
  t294 = new tri(-38750, 500, 1.3)
  t295 = new tri(-38800, 500, 1)
  t296 = new tri(40600, 500, 1)
  t297 = new tri(40650, 500, 1.3)
  t298 = new tri(40700, 500, 1)
  t299 = new tri(-40500, 500, 1)
  t300 = new tri(-40550, 500, 1.3)
  t301 = new tri(-40600, 500, 1)
  t302 = new tri(41800, 500, 1)
  t303 = new tri(41850, 500, 1.3)
  t304 = new tri(41900, 500, 1)
  frameRate(60)
}

function draw() {
  background(0);
  if (boost1 >= 100 && boost1 <= 300) {
    ow.play()
  }
  if (boost2 >= 100 && boost2 <= 300) {
    ow.play()
  }
  if (gamestate == 4 || gamestate == 5) {
    if (owo == 1) {
      ow.play()
    }
  }
  noStroke()
  t += 1
  if (t == 328) {
    mainmenu2.play()
    mainmenu2.setLoop(true)
  }
  if ((t - 5) % 40 == 0) {
    beat = 1.1
  } else {
    beat = 1
  }
  if (gamestate == 0) {
    if (t == 10) {
      mainmenu.play()
    }
    U.draw()
    if (end == true) {
      push()
      fill(255, 140, 0, 200)
      ellipse(430, 470, 60)
      fill(255, 200)
      ellipse(417, 470, 20)
      ellipse(443, 470, 20)
      pop()
      push()
      fill(0, 220)
      translate(417, 470)
      var fri1 = new vec2(mouseX - 417, mouseY - 470)
      var fri1r = fri1.getAngle()
      rotate(fri1r)
      ellipse(4, 0, 12)
      pop()
      push()
      fill(0, 220)
      translate(443, 470, 12)
      rotate(fri1r)
      ellipse(4, 0, 12)
      pop()
      push()
      fill(127, 255, 0, 200)
      ellipse(510, 470, 60)
      fill(255, 200)
      ellipse(497, 470, 20)
      ellipse(523, 470, 20)
      pop()
      push()
      fill(0, 220)
      translate(497, 470)
      var fri2 = new vec2(mouseX - 497, mouseY - 470)
      var fri2r = fri2.getAngle()
      rotate(fri2r)
      ellipse(4, 0, 12)
      pop()
      push()
      fill(0, 220)
      translate(523, 470)
      rotate(fri2r)
      ellipse(4, 0, 12)
      pop()
      push()
      fill(255, 192, 203, 200)
      ellipse(590, 470, 60)
      fill(255, 200)
      ellipse(577, 470, 20)
      ellipse(603, 470, 20)
      pop()
      push()
      fill(0, 220)
      translate(577, 470, 20)
      var fri3 = new vec2(mouseX - 577, mouseY - 470)
      var fri3r = fri3.getAngle()
      rotate(fri3r)
      ellipse(4, 0, 12)
      pop()
      push()
      fill(0, 220)
      translate(603, 470, 20)
      rotate(fri3r)
      ellipse(4, 0, 12)
      pop()
    }
    push()
    translate(350, 200)
    scale(beat)
    fill(255)
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(100)
    text('START', 0, 0)
    translate(0, -35)
    noFill()
    stroke(255)
    strokeWeight(10)
    rectMode(CENTER)
    rect(0, 0, 380, 150)
    pop()
  }
  if (gamestate == 1) {
    mainmenu2.setLoop(false)
    U.draw()
    U.update()
    U.fall()
    if (U.position.y == 470) {
      jumpcount = 0
    }
    tt += 1
    if (tt >= 1) {
      tt = 1
    }
    for (var lives = 0; lives < life; lives = lives + 1) {
      fill(135, 206, 250, 200)
      ellipse(lives * 50 + 30, 30, 40)
    }
    if (U.position.x < 30) {
      U.position.x = 25
    }
    if (U.position.x > 670) {
      U.position.x = 675
    }
  }
  if (t > 350 && tt == 1 && mainmenu2.isPlaying() == false) {
    gamestate = 2
  }
  if (gamestate == 2) {
    tt = 0
    g += 1
    if (g < 500) {
      boost2 = -1
    } else if (g == 500) {
      boost2 = 0
    }
    if (cameraX == 0) {
      fight.play()
    }
    translate(-cameraX, -cameraY)
    push()
    story += 3
    again += 3
    textStyle(BOLD)
    textAlign(CENTER)
    textSize(50)
    fill(255)
    text('You are a jelly who tries to rescue your friends from a giant jelly factory.', 700 + story, 50, 500, 300)
    text('W, D to move, Space to jump / double jump', 1400 + story, 70, 500, 300)
    text('While in air, S to dash down', 2000 + story, 70, 500, 300)
    textSize(150)
    text('Good Luck!!', 8000 + (story * 2) / 3, 180)
    text('Try Again!!', 1200 + again, 180)
    pop()
    //boss
    screen += 1
    if (screen >= 6150) {
      screen = 6150
    }
    bosx += 5
    push()
    fill(100)
    rectMode(CENTER)
    rect(350 + bosx, -6060 + screen, 200, 150)
    fill(70)
    rect(350 + bosx, -6160 + screen, 15, 50)
    fill(0)
    rect(350 + bosx, -6060 + screen, 180, 130)
    pop()
    //boss
    //map
    push()
    t1.draw()
    t2.draw()
    t3.draw()
    t4.draw()
    t5.draw()
    t6.draw()
    t7.draw()
    t8.draw()
    t9.draw()
    t10.draw()
    t11.draw()
    t12.draw()
    t13.draw()
    t14.draw()
    t15.draw()
    t16.draw()
    t17.draw()
    t18.draw()
    t19.draw()
    t20.draw()
    t21.draw()
    t22.draw()
    t23.draw()
    t24.draw()
    t25.draw()
    t26.draw()
    t27.draw()
    t28.draw()
    t29.draw()
    t30.draw()
    t31.draw()
    t32.draw()
    t033.draw()
    t034.draw()
    t035.draw()
    t036.draw()
    t037.draw()
    t038.draw()
    t039.draw()
    t040.draw()
    t041.draw()
    t042.draw()
    t043.draw()
    t044.draw()
    t045.draw()
    t046.draw()
    t047.draw()
    t048.draw()
    t049.draw()
    t050.draw()
    t051.draw()
    t052.draw()
    t053.draw()
    t054.draw()
    t055.draw()
    t056.draw()
    t057.draw()
    t058.draw()
    t059.draw()
    t060.draw()
    t061.draw()
    t062.draw()
    t063.draw()
    t064.draw()
    t065.draw()
    t066.draw()
    s1.draw()
    s2.draw()
    s3.draw()
    t067.draw()
    t068.draw()
    t069.draw()
    t070.draw()
    t071.draw()
    t072.draw()
    t073.draw()
    t074.draw()
    t075.draw()
    t076.draw()
    t077.draw()
    t078.draw()
    t079.draw()
    t080.draw()
    t081.draw()
    s4.draw()
    s5.draw()
    s6.draw()
    t082.draw()
    t083.draw()
    t084.draw()
    t085.draw()
    t086.draw()
    t087.draw()
    t088.draw()
    t089.draw()
    t090.draw()
    t091.draw()
    t092.draw()
    t093.draw()
    t94.draw()
    t95.draw()
    t96.draw()
    t97.draw()
    t98.draw()
    t99.draw()
    t100.draw()
    t101.draw()
    t102.draw()
    t103.draw()
    t104.draw()
    t105.draw()
    t106.draw()
    t107.draw()
    t108.draw()
    t109.draw()
    t110.draw()
    t111.draw()
    t112.draw()
    t113.draw()
    t114.draw()
    t115.draw()
    t116.draw()
    t117.draw()
    t118.draw()
    t119.draw()
    t120.draw()
    t121.draw()
    t122.draw()
    t123.draw()
    t124.draw()
    t125.draw()
    t126.draw()
    t127.draw()
    t128.draw()
    t129.draw()
    t130.draw()
    t131.draw()
    s7.draw()
    s8.draw()
    s9.draw()
    s10.draw()
    s11.draw()
    s12.draw()
    s13.draw()
    s14.draw()
    s15.draw()
    t132.draw()
    t133.draw()
    t134.draw()
    t135.draw()
    t136.draw()
    t137.draw()
    t138.draw()
    t139.draw()
    t140.draw()
    t141.draw()
    t142.draw()
    t143.draw()
    s16.draw()
    s17.draw()
    s18.draw()
    t144.draw()
    t145.draw()
    t146.draw()
    t147.draw()
    t148.draw()
    t149.draw()
    t150.draw()
    t151.draw()
    t152.draw()
    t153.draw()
    t154.draw()
    t155.draw()
    s19.draw()
    s20.draw()
    s21.draw()
    s22.draw()
    s23.draw()
    s24.draw()
    s25.draw()
    s26.draw()
    s27.draw()
    s28.draw()
    s29.draw()
    s30.draw()
    s31.draw()
    s32.draw()
    s33.draw()
    s34.draw()
    s35.draw()
    s36.draw()
    s37.draw()
    s38.draw()
    s39.draw()
    s40.draw()
    s41.draw()
    s42.draw()
    s43.draw()
    s44.draw()
    s45.draw()
    s46.draw()
    s47.draw()
    s48.draw()
    s49.draw()
    s50.draw()
    s51.draw()
    s52.draw()
    s53.draw()
    t156.draw()
    t157.draw()
    t158.draw()
    t159.draw()
    t160.draw()
    t161.draw()
    t162.draw()
    t163.draw()
    t164.draw()
    t165.draw()
    s54.draw()
    s55.draw()
    s56.draw()
    s57.draw()
    t166.draw()
    t167.draw()
    t168.draw()
    t169.draw()
    t170.draw()
    t171.draw()
    t172.draw()
    t173.draw()
    t174.draw()
    t175.draw()
    t176.draw()
    t177.draw()
    t178.draw()
    g1.draw()
    g2.draw()
    g3.draw()
    g4.draw()
    t1.update()
    t2.update()
    t3.update()
    t4.update()
    t5.update()
    t6.update()
    t7.update()
    t8.update()
    t9.update()
    t10.update()
    t11.update()
    t12.update()
    t13.update()
    t14.update()
    t15.update()
    t16.update()
    t17.update()
    t18.update()
    t19.update()
    t20.update()
    t21.update()
    t22.update()
    t23.update()
    t24.update()
    t25.update()
    t26.update()
    t27.update()
    t28.update()
    t29.update()
    t30.update()
    t31.update()
    t32.update()
    t033.update()
    t034.update()
    t035.update()
    t036.update()
    t037.update()
    t038.update()
    t039.update()
    t040.update()
    t041.update()
    t042.update()
    t043.update()
    t044.update()
    t045.update()
    t046.update()
    t047.update()
    t048.update()
    t049.update()
    t050.update()
    t051.update()
    t052.update()
    t053.update()
    t054.update()
    t055.update()
    t056.update()
    t057.update()
    t058.update()
    t059.update()
    t060.update()
    t061.update()
    t062.update()
    t063.update()
    t064.update()
    t065.update()
    t066.update()
    s1.update()
    s2.update()
    s3.update()
    t067.update()
    t068.update()
    t069.update()
    t070.update()
    t071.update()
    t072.update()
    t073.update()
    t074.update()
    t075.update()
    t076.update()
    t077.update()
    t078.update()
    t079.update()
    t080.update()
    t081.update()
    s4.update()
    s5.update()
    s6.update()
    t082.update()
    t083.update()
    t084.update()
    t085.update()
    t086.update()
    t087.update()
    t088.update()
    t089.update()
    t090.update()
    t091.update()
    t092.update()
    t093.update()
    t94.update()
    t95.update()
    t96.update()
    t97.update()
    t98.update()
    t99.update()
    t100.update()
    t101.update()
    t102.update()
    t103.update()
    t104.update()
    t105.update()
    t106.update()
    t107.update()
    t108.update()
    t109.update()
    t110.update()
    t111.update()
    t112.update()
    t113.update()
    t114.update()
    t115.update()
    t116.update()
    t117.update()
    t118.update()
    t119.update()
    t120.update()
    t121.update()
    t122.update()
    t123.update()
    t124.update()
    t125.update()
    t126.update()
    t127.update()
    t128.update()
    t129.update()
    t130.update()
    t131.update()
    s7.update()
    s8.update()
    s9.update()
    s10.update()
    s11.update()
    s12.update()
    s13.update()
    s14.update()
    s15.update()
    t131.update()
    t132.update()
    t133.update()
    t134.update()
    t135.update()
    t136.update()
    t137.update()
    t138.update()
    t139.update()
    t140.update()
    t141.update()
    t142.update()
    t143.update()
    s16.update()
    s17.update()
    s18.update()
    t144.update()
    t145.update()
    t146.update()
    t147.update()
    t148.update()
    t149.update()
    t150.update()
    t151.update()
    t152.update()
    t153.update()
    t154.update()
    t155.update()
    s19.update()
    s20.update()
    s21.update()
    s22.update()
    s23.update()
    s24.update()
    s25.update()
    s26.update()
    s27.update()
    s28.update()
    s29.update()
    s30.update()
    s31.update()
    s32.update()
    s33.update()
    s34.update()
    s35.update()
    s36.update()
    s37.update()
    s38.update()
    s39.update()
    s40.update()
    s41.update()
    s42.update()
    s43.update()
    s44.update()
    s45.update()
    s46.update()
    s47.update()
    s48.update()
    s49.update()
    s50.update()
    s51.update()
    s52.update()
    s53.update()
    t156.update()
    t157.update()
    t158.update()
    t159.update()
    t160.update()
    t161.update()
    t162.update()
    t163.update()
    t164.update()
    t165.update()
    s54.update()
    s55.update()
    s56.update()
    s57.update()
    t166.update()
    t167.update()
    t168.update()
    t169.update()
    t170.update()
    t171.update()
    t172.update()
    t173.update()
    t174.update()
    t175.update()
    t176.update()
    t177.update()
    t178.update()
    g1.update()
    g2.update()
    g3.update()
    g4.update()
    pop()
    //map
    U.draw()
    U.update()
    U.fall()
    if (U.position.x < cameraX + 32) {
      U.position.x = cameraX + 32
    }
    if (U.position.x > cameraX + 668) {
      U.position.x = cameraX + 668
    }
    U.position.x += 3
    cameraX += 5
    if (U.position.y == 470) {
      jumpcount = 0
    }
    for (var lives = 0; lives < life; lives = lives + 1) {
      fill(135, 206, 250, 200)
      ellipse(lives * 50 + 25 + bosx, 30, 40)
    }
    if (gameover == true) {
      owo = 0
      gamestate = 5
      fight.stop()
      if (g >= 2500) {
        story = 10000000
        again = 0
      } else {
        story = 0
        again = 10000000
      }
      bosx = 0
      screen = 0
      U.position.x = U.position.x - cameraX
      U.s = 500
      t1.z = t1.x - 640
      t2.z = t2.x - 640
      t3.z = t3.x - 640
      t4.z = t4.x - 640
      t5.z = t5.x - 640
      t6.z = t6.x - 640
      t7.z = t7.x - 640
      t8.z = t8.x - 640
      t9.z = t9.x - 640
      t10.z = t10.x - 640
      t11.z = t11.x - 640
      t12.z = t12.x - 640
      t13.z = t13.x - 640
      t14.z = t14.x - 640
      t15.z = t15.x - 640
      t16.z = t16.x - 640
      t17.z = t17.x - 640
      t18.z = t18.x - 640
      t19.z = t19.x - 640
      t20.z = t20.x - 640
      t21.z = t21.x - 640
      t22.z = t22.x - 640
      t23.z = t23.x - 640
      t24.z = t24.x - 640
      t25.z = t25.x - 640
      t26.z = t26.x - 640
      t27.z = t27.x - 640
      t28.z = t28.x - 640
      t29.z = t29.x - 640
      t30.z = t30.x - 640
      t31.z = t31.x - 640
      t32.z = t32.x - 640
      t033.z = t033.x - 640
      t034.z = t034.x - 640
      t035.z = t035.x - 640
      t036.z = t036.x - 640
      t037.z = t037.x - 640
      t038.z = t038.x - 640
      t039.z = t039.x - 640
      t040.z = t040.x - 640
      t041.z = t041.x - 640
      t042.z = t042.x - 640
      t043.z = t043.x - 640
      t044.z = t044.x - 640
      t045.z = t045.x - 640
      t046.z = t046.x - 640
      t047.z = t047.x - 640
      t048.z = t048.x - 640
      t049.z = t049.x - 640
      t050.z = t050.x - 640
      t051.z = t051.x - 640
      t052.z = t052.x - 640
      t053.z = t053.x - 640
      t054.z = t054.x - 640
      t055.z = t055.x - 640
      t056.z = t056.x - 640
      t057.z = t057.x - 640
      t058.z = t058.x - 640
      t059.z = t059.x - 640
      t060.z = t060.x - 640
      t061.z = t061.x - 640
      t062.z = t062.x - 640
      t063.z = t063.x - 640
      t064.z = t064.x - 640
      t065.z = t065.x - 640
      t066.z = t066.x - 640
      t067.z = t067.x - 640
      t068.z = t068.x - 640
      t069.z = t069.x - 640
      t070.z = t070.x - 640
      t071.z = t071.x - 640
      t072.z = t072.x - 640
      t073.z = t073.x - 640
      t074.z = t074.x - 640
      t075.z = t075.x - 640
      t076.z = t076.x - 640
      t077.z = t077.x - 640
      t078.z = t078.x - 640
      t079.z = t079.x - 640
      t080.z = t080.x - 640
      t081.z = t081.x - 640
      t082.z = t082.x - 640
      t083.z = t083.x - 640
      t084.z = t084.x - 640
      t085.z = t085.x - 640
      t086.z = t086.x - 640
      t087.z = t087.x - 640
      t088.z = t088.x - 640
      t089.z = t089.x - 640
      t090.z = t090.x - 640
      t091.z = t091.x - 640
      t092.z = t092.x - 640
      t093.z = t093.x - 640
      t94.z = t94.x - 640
      t95.z = t95.x - 640
      t96.z = t96.x - 640
      t97.z = t97.x - 640
      t98.z = t98.x - 640
      t99.z = t99.x - 640
      t100.z = t100.x - 640
      t101.z = t101.x - 640
      t102.z = t102.x - 640
      t103.z = t103.x - 640
      t104.z = t104.x - 640
      t105.z = t105.x - 640
      t106.z = t106.x - 640
      t107.z = t107.x - 640
      t108.z = t108.x - 640
      t109.z = t109.x - 640
      t110.z = t110.x - 640
      t111.z = t111.x - 640
      t112.z = t112.x - 640
      t113.z = t113.x - 640
      t114.z = t114.x - 640
      t115.z = t115.x - 640
      t116.z = t116.x - 640
      t117.z = t117.x - 640
      t118.z = t118.x - 640
      t119.z = t119.x - 640
      t120.z = t120.x - 640
      t121.z = t121.x - 640
      t122.z = t122.x - 640
      t123.z = t123.x - 640
      t124.z = t124.x - 640
      t125.z = t125.x - 640
      t126.z = t126.x - 640
      t127.z = t127.x - 640
      t128.z = t128.x - 640
      t129.z = t129.x - 640
      t130.z = t130.x - 640
      t131.z = t131.x - 640
      t132.z = t132.x - 640
      t133.z = t133.x - 640
      t134.z = t134.x - 640
      t135.z = t135.x - 640
      t136.z = t136.x - 640
      t137.z = t137.x - 640
      t138.z = t138.x - 640
      t139.z = t139.x - 640
      t140.z = t140.x - 640
      t141.z = t141.x - 640
      t142.z = t142.x - 640
      t143.z = t143.x - 640
      t144.z = t144.x - 640
      t145.z = t145.x - 640
      t146.z = t146.x - 640
      t147.z = t147.x - 640
      t148.z = t148.x - 640
      t149.z = t149.x - 640
      t150.z = t150.x - 640
      t151.z = t151.x - 640
      t152.z = t152.x - 640
      t153.z = t153.x - 640
      t154.z = t154.x - 640
      t155.z = t155.x - 640
      t156.z = t156.x - 640
      t157.z = t157.x - 640
      t158.z = t158.x - 640
      t159.z = t159.x - 640
      t160.z = t160.x - 640
      t161.z = t161.x - 640
      t162.z = t162.x - 640
      t163.z = t163.x - 640
      t164.z = t164.x - 640
      t165.z = t165.x - 640
      t166.z = t166.x - 640
      t167.z = t167.x - 640
      t168.z = t168.x - 640
      t169.z = t169.x - 640
      t170.z = t170.x - 640
      t171.z = t171.x - 640
      t172.z = t172.x - 640
      t173.z = t173.x - 640
      t174.z = t174.x - 640
      t175.z = t175.x - 640
      t176.z = t176.x - 640
      t177.z = t177.x - 640
      t178.z = t178.x - 640
      s1.z = 0
      s2.z = 0
      s3.z = 0
      s4.z = 0
      s5.z = 0
      s6.z = 0
      s7.z = 0
      s8.z = 0
      s9.z = 0
      s10.z = 0
      s11.z = 0
      s12.z = 0
      s13.z = 0
      s14.z = 0
      s15.z = 0
      s16.z = 0
      s17.z = 0
      s18.z = 0
      s19.z = 0
      s20.z = 0
      s21.z = 0
      s54.z = 0
      s55.z = 0
      s56.z = 0
      s57.z = 0
      s22.z = 0
      s23.z = 0
      s24.z = 0
      s25.z = 0
      s26.z = 0
      s27.z = 0
      s28.z = 0
      s29.z = 0
      s30.z = 0
      s31.z = 0
      s32.z = 0
      s33.z = 0
      s34.z = 0
      s35.z = 0
      s36.z = 0
      s37.z = 0
      s38.z = 0
      s39.z = 0
      s40.z = 0
      s41.z = 0
      s42.z = 0
      s43.z = 0
      s44.z = 0
      s45.z = 0
      s46.z = 0
      s47.z = 0
      s48.z = 0
      s49.z = 0
      s50.z = 0
      s51.z = 0
      s52.z = 0
      s53.z = 0
      s22.h = 0
      s23.h = 0
      s24.h = 0
      s25.h = 0
      s26.h = 0
      s27.h = 0
      s28.h = 0
      s29.h = 0
      s30.h = 0
      s31.h = 0
      s32.h = 0
      s33.h = 0
      s34.h = 0
      s35.h = 0
      s36.h = 0
      s37.h = 0
      s38.h = 0
      s39.h = 0
      s40.h = 0
      s41.h = 0
      s42.h = 0
      s43.h = 0
      s44.h = 0
      s45.h = 0
      s46.h = 0
      s47.h = 0
      s48.h = 0
      s49.h = 0
      s50.h = 0
      s51.h = 0
      s52.h = 0
      s53.h = 0
    }
  }
  if (gamestate == 5) {
    owo += 1
    mainmenu2.stop()
    gameover = false
    cameraX = 0
    cameraY = 0
    jumpcount = 0
    tt = 0
    g = 0
    b = 0
    screen = 0
    beat = 1
    life = 3
    end2 = false
    damage1 = false
    damage2 = false
    boost1 = 0
    boost2 = 0
    onehit = false
    twohit = false
    eye = 0
    lid = 60
    bat = 60
    mouth = 90
    face = 0
    boss = 0
    ded = 0
    w = 700
    j = 100
    prison = 0
    free = 0
    tnks = -300
    fin = -1200
    push()
    fill(255)
    textAlign(CENTER)
    textStyle(BOLD)
    textSize(100)
    text("Retry?", 350, 180)
    textSize(50)
    text('Press Enter', 350, 300)
    pop()
    U.draw()
    U.update()
    U.fall()
    push()
    fill(255)
    textAlign(CENTER)
    textStyle(BOLD)
    textSize(20)
    text('ESC = mainmenu', 100, 40)
    pop()
  }
  if (gamestate == 2 && fight.isPlaying() == false) {
    U.position.x = U.position.x - cameraX
    gamestate = 3
  }
  if (gamestate == 4) {
    owo += 1
    mainmenu2.stop()
    gameover = false
    jumpcount = 0
    g = 0
    b = 0
    screen = 0
    beat = 1
    life = 3
    end2 = false
    damage1 = false
    damage2 = false
    boost1 = 0
    boost2 = 0
    onehit = false
    twohit = false
    eye = 0
    lid = 60
    bat = 60
    mouth = 90
    face = 0
    boss = 0
    ded = 0
    w = 700
    j = 100
    prison = 0
    free = 0
    tnks = -300
    fin = -1200
    push()
    fill(255)
    textAlign(CENTER)
    textStyle(BOLD)
    textSize(100)
    text("Retry?", 350, 180)
    textSize(50)
    text('Press Enter', 350, 300)
    pop()
    U.draw()
    U.update()
    U.fall()
    push()
    fill(255)
    textAlign(CENTER)
    textStyle(BOLD)
    textSize(20)
    text('ESC = mainmenu', 100, 40)
    pop()
  }
  if (gamestate == 3) {
    if (gameover == true) {
      owo = 0
      gamestate = 4
      fight2.stop()
      t179.x = 7400
      t180.x = 7450
      t181.x = 7500
      t182.x = -7300
      t183.x = -7350
      t184.x = -7400
      t185.x = 8600
      t186.x = 8650
      t187.x = 8700
      t188.x = -9200
      t189.x = -9250
      t190.x = -9300
      t191.x = 10500
      t192.x = 10550
      t193.x = 10600
      t194.x = -10400
      t195.x = -10450
      t196.x = -10500
      t197.x = 12300
      t198.x = 12350
      t199.x = 12400
      t200.x = -12200
      t201.x = -12250
      t202.x = -12300
      t203.x = 13500
      t204.x = 13550
      t205.x = 13600
      t206.x = -14000
      t207.x = -14050
      t208.x = -14100
      t209.x = 15300
      t210.x = 15350
      t211.x = 15400
      t212.x = -15200
      t213.x = -15250
      t214.x = -15300
      t215.x = 17100
      t216.x = 17150
      t217.x = 17200
      t218.x = -17100
      t219.x = -17050
      t220.x = -17100
      t221.x = 18300
      t222.x = 18350
      t223.x = 18400
      t224.x = -18700
      t225.x = -18750
      t226.x = -18800
      t227.x = 20000
      t228.x = 20050
      t229.x = 20100
      t230.x = -19900
      t231.x = -19950
      t232.x = -20000
      t233.x = 21800
      t234.x = 21850
      t235.x = 21900
      t236.x = -21700
      t237.x = -21750
      t238.x = -21800
      t239.x = 23000
      t240.x = 23050
      t241.x = 23100
      t242.x = 26250
      t243.x = 26300
      t244.x = 26350
      t245.x = -26150
      t246.x = -26200
      t247.x = -26250
      t248.x = 27450
      t249.x = 27500
      t250.x = 27550
      t251.x = -28050
      t252.x = -28100
      t253.x = -28150
      t254.x = 29350
      t255.x = 29400
      t256.x = 29450
      t257.x = -29250
      t258.x = -29300
      t259.x = -29350
      t260.x = 31100
      t261.x = 31150
      t262.x = 31200
      t263.x = -31000
      t264.x = -31050
      t265.x = -31100
      t266.x = 32300
      t267.x = 32350
      t268.x = 32400
      t269.x = -32800
      t270.x = -32850
      t271.x = -32900
      t272.x = 34100
      t273.x = 34150
      t274.x = 34200
      t275.x = -34000
      t276.x = -34050
      t277.x = -34100
      t278.x = 35900
      t279.x = 35950
      t280.x = 36000
      t281.x = -35800
      t282.x = -35850
      t283.x = -35900
      t284.x = 37100
      t285.x = 37150
      t286.x = 37200
      t287.x = -37500
      t288.x = -37550
      t289.x = -37600
      t290.x = 38800
      t291.x = 38850
      t292.x = 38900
      t293.x = -38700
      t294.x = -38750
      t295.x = -38800
      t296.x = 40600
      t297.x = 40650
      t298.x = 40700
      t299.x = -40500
      t300.x = -40550
      t301.x = -40600
      t302.x = 41800
      t303.x = 41850
      t304.x = 41900
      t179.z = t179.x - 640
      t180.z = t180.x - 640
      t181.z = t181.x - 640
      t182.z = 700 - t182.x - 640
      t183.z = 700 - t183.x - 640
      t184.z = 700 - t184.x - 640
      t185.z = t185.x - 640
      t186.z = t186.x - 640
      t187.z = t187.x - 640
      t188.z = 700 - t188.x - 640
      t189.z = 700 - t189.x - 640
      t190.z = 700 - t190.x - 640
      t191.z = t191.x - 640
      t192.z = t192.x - 640
      t193.z = t193.x - 640
      t194.z = 700 - t194.x - 640
      t195.z = 700 - t195.x - 640
      t196.z = 700 - t196.x - 640
      t197.z = t197.x - 640
      t198.z = t198.x - 640
      t199.z = t199.x - 640
      t200.z = 700 - t200.x - 640
      t201.z = 700 - t201.x - 640
      t202.z = 700 - t202.x - 640
      t203.z = t203.x - 640
      t204.z = t204.x - 640
      t205.z = t205.x - 640
      t206.z = 700 - t206.x - 640
      t207.z = 700 - t207.x - 640
      t208.z = 700 - t208.x - 640
      t209.z = t209.x - 640
      t210.z = t210.x - 640
      t211.z = t211.x - 640
      t212.z = 700 - t212.x - 640
      t213.z = 700 - t213.x - 640
      t214.z = 700 - t214.x - 640
      t215.z = t215.x - 640
      t216.z = t216.x - 640
      t217.z = t217.x - 640
      t218.z = 700 - t218.x - 640
      t219.z = 700 - t219.x - 640
      t220.z = 700 - t220.x - 640
      t221.z = t221.x - 640
      t222.z = t222.x - 640
      t223.z = t223.x - 640
      t224.z = 700 - t224.x - 640
      t225.z = 700 - t225.x - 640
      t226.z = 700 - t226.x - 640
      t227.z = t227.x - 640
      t228.z = t228.x - 640
      t229.z = t229.x - 640
      t230.z = 700 - t230.x - 640
      t231.z = 700 - t231.x - 640
      t232.z = 700 - t232.x - 640
      t233.z = t233.x - 640
      t234.z = t234.x - 640
      t235.z = t235.x - 640
      t236.z = 700 - t236.x - 640
      t237.z = 700 - t237.x - 640
      t238.z = 700 - t238.x - 640
      t239.z = t239.x - 640
      t240.z = t240.x - 640
      t241.z = t241.x - 640
      t242.z = t242.x - 640
      t243.z = t243.x - 640
      t244.z = t244.x - 640
      t245.z = 700 - t245.x - 640
      t246.z = 700 - t246.x - 640
      t247.z = 700 - t247.x - 640
      t248.z = t248.x - 640
      t249.z = t249.x - 640
      t250.z = t250.x - 640
      t251.z = 700 - t251.x - 640
      t252.z = 700 - t252.x - 640
      t253.z = 700 - t253.x - 640
      t254.z = t254.x - 640
      t255.z = t255.x - 640
      t256.z = t256.x - 640
      t257.z = 700 - t257.x - 640
      t258.z = 700 - t258.x - 640
      t259.z = 700 - t259.x - 640
      t260.z = t260.x - 640
      t261.z = t261.x - 640
      t262.z = t262.x - 640
      t263.z = 700 - t263.x - 640
      t264.z = 700 - t264.x - 640
      t265.z = 700 - t265.x - 640
      t266.z = t266.x - 640
      t267.z = t267.x - 640
      t268.z = t268.x - 640
      t269.z = 700 - t269.x - 640
      t270.z = 700 - t270.x - 640
      t271.z = 700 - t271.x - 640
      t272.z = t272.x - 640
      t273.z = t273.x - 640
      t274.z = t274.x - 640
      t275.z = 700 - t275.x - 640
      t276.z = 700 - t276.x - 640
      t277.z = 700 - t277.x - 640
      t278.z = t278.x - 640
      t279.z = t279.x - 640
      t280.z = t280.x - 640
      t281.z = 700 - t281.x - 640
      t282.z = 700 - t282.x - 640
      t283.z = 700 - t283.x - 640
      t284.z = t284.x - 640
      t285.z = t285.x - 640
      t286.z = t286.x - 640
      t287.z = 700 - t287.x - 640
      t288.z = 700 - t288.x - 640
      t289.z = 700 - t289.x - 640
      t290.z = t290.x - 640
      t291.z = t291.x - 640
      t292.z = t292.x - 640
      t293.z = 700 - t293.x - 640
      t294.z = 700 - t294.x - 640
      t295.z = 700 - t295.x - 640
      t296.z = t296.x - 640
      t297.z = t297.x - 640
      t298.z = t298.x - 640
      t299.z = 700 - t299.x - 640
      t300.z = 700 - t300.x - 640
      t301.z = 700 - t301.x - 640
      t302.z = t302.x - 640
      t303.z = t303.x - 640
      t304.z = t304.x - 640
      g5.x = 23600
      g6.x = -23400
      g7.x = 24700
      g8.y = 600
      g9.y = 600
      g10.y = 600
      g11.y = 600
      g12.y = 600
      g13.y = 600
      g14.y = 600
      s58.delay = 16
      s59.delay = 18
      s60.delay = 20
      s61.delay = 22
      s62.delay = 24
      s63.delay = 26
      s64.delay = 28
      s65.delay = 30
      s66.delay = 32
      s67.delay = 34
      s68.delay = 18
      s69.delay = 20
      s70.delay = 22
      s71.delay = 24
      s72.delay = 26
      s73.delay = 28
      s74.delay = 30
      s75.delay = 32
      s76.delay = 34
      s77.delay = 20
      s78.delay = 22
      s79.delay = 24
      s80.delay = 26
      s81.delay = 28
      s82.delay = 30
      s83.delay = 32
      s84.delay = 34
      s85.delay = 22
      s86.delay = 24
      s87.delay = 26
      s88.delay = 28
      s89.delay = 30
      s90.delay = 32
      s91.delay = 34
      s92.delay = 22
      s93.delay = 26
      s94.delay = 28
      s95.delay = 30
      s96.delay = 32
      s97.delay = 34
      s98.delay = 26
      s99.delay = 28
      s100.delay = 30
      s101.delay = 32
      s102.delay = 34
      s103.delay = 28
      s104.delay = 30
      s105.delay = 32
      s106.delay = 34
      s107.delay = 30
      s108.delay = 32
      s109.delay = 34
      s110.delay = 32
      s111.delay = 34
      s112.delay = 34
      s113.delay = 45
      s114.delay = 61
      s115.delay = 77
      s116.delay = 93
      s117.delay = 109
      s118.delay = 124
      s119.delay = 139
      s120.delay = 170
      s123.delay = 186
      s124.delay = 202
      s127.delay = 218
      s128.delay = 234
      s131.delay = 250
      s132.delay = 265
      s58.z = 0
      s59.z = 0
      s60.z = 0
      s61.z = 0
      s62.z = 0
      s63.z = 0
      s64.z = 0
      s65.z = 0
      s66.z = 0
      s67.z = 0
      s68.z = 0
      s69.z = 0
      s70.z = 0
      s71.z = 0
      s72.z = 0
      s73.z = 0
      s74.z = 0
      s75.z = 0
      s76.z = 0
      s77.z = 0
      s78.z = 0
      s79.z = 0
      s80.z = 0
      s81.z = 0
      s82.z = 0
      s83.z = 0
      s84.z = 0
      s85.z = 0
      s86.z = 0
      s87.z = 0
      s88.z = 0
      s89.z = 0
      s90.z = 0
      s91.z = 0
      s92.z = 0
      s93.z = 0
      s94.z = 0
      s95.z = 0
      s96.z = 0
      s97.z = 0
      s98.z = 0
      s99.z = 0
      s100.z = 0
      s101.z = 0
      s102.z = 0
      s103.z = 0
      s104.z = 0
      s105.z = 0
      s106.z = 0
      s107.z = 0
      s108.z = 0
      s109.z = 0
      s110.z = 0
      s111.z = 0
      s112.z = 0
      s113.z = 0
      s114.z = 0
      s115.z = 0
      s116.z = 0
      s117.z = 0
      s118.z = 0
      s119.z = 0
      s120.z = 0
      s123.z = 0
      s124.z = 0
      s127.z = 0
      s128.z = 0
      s131.z = 0
      s132.z = 0
    }
    if (b == 0) {
      fight2.play()
    }
    b += 1
    //boss
    let be = new vec2(U.position.x - 350, U.position.y - 80)
    if (b < 2700) {
      eye = be.getAngle()
    }
    push()
    translate(ded, sin(boss / 6.3) * 10 - 10)
    fill(100)
    rectMode(CENTER)
    rect(350, 100, 200, 150)
    fill(70)
    rect(350, 0, 15, 50)
    fill(0)
    rect(350, 100, 180, 130)
    pop()
    push()
    translate(ded, sin(boss / 6.3) * 12 - 10)
    fill(255, 0, 0, 150)
    ellipse(310, 80, 50)
    ellipse(390, 80, 50)
    pop()
    push()
    translate(ded, sin(boss / 6.3) * 12 - 10)
    translate(310, 80)
    rotate(eye)
    fill(255, 0, 0)
    ellipse(10, 0, 30)
    pop()
    push()
    translate(ded, sin(boss / 6.3) * 12 - 10)
    translate(390, 80)
    fill(255, 0, 0)
    rotate(eye)
    ellipse(10, 0, 30)
    pop()
    push()
    translate(ded, sin(boss / 6.3) * 12 - 10)
    rectMode(CENTER)
    fill(100)
    rect(350, 140, 100, 25)
    rect(400, 140, 10, 10)
    fill(0)
    rect(350, 140, 90, 15)
    pop()
    push()
    translate(ded, sin(boss / 6.3) * 12 - 10)
    fill(255, 0, 0)
    rect(305, 132.5, mouth, 15)
    pop()
    push()
    translate(ded, sin(boss / 6.3) * 12 - 10)
    fill(0)
    rect(280, 50, 150, face)
    rect(280, 50, 150, lid)
    rect(280, 105, 150, bat)
    pop()
    if (b >= 340) {
      lid -= 10
    }
    if (lid <= 0) {
      lid = 0
    }
    if (b >= 375) {
      bat -= 10
    }
    if (bat <= 0) {
      bat = 0
    }
    if (b >= 400 && b <= 2780) {
      boss += 1
    }
    if (b >= 2700) {
      eye = random(2 * PI)
    }
    if (b >= 2850) {
      face += 2
    }
    if (b >= 2900) {
      ded -= 2
    }
    if (face >= 110) {
      face = 110
    }
    if (b >= 500) {
      mouth -= 0.039
    }
    if (mouth <= 0) {
      mouth = 0
    }
    //boss
    //map
    t179.x -= 15
    t180.x -= 15
    t181.x -= 15
    t182.x += 15
    t183.x += 15
    t184.x += 15
    t185.x -= 15
    t186.x -= 15
    t187.x -= 15
    t188.x += 15
    t189.x += 15
    t190.x += 15
    t191.x -= 15
    t192.x -= 15
    t193.x -= 15
    t194.x += 15
    t195.x += 15
    t196.x += 15
    t197.x -= 15
    t198.x -= 15
    t199.x -= 15
    t200.x += 15
    t201.x += 15
    t202.x += 15
    t203.x -= 15
    t204.x -= 15
    t205.x -= 15
    t206.x += 15
    t207.x += 15
    t208.x += 15
    t209.x -= 15
    t210.x -= 15
    t211.x -= 15
    t212.x += 15
    t213.x += 15
    t214.x += 15
    t215.x -= 15
    t216.x -= 15
    t217.x -= 15
    t218.x += 15
    t219.x += 15
    t220.x += 15
    t221.x -= 15
    t222.x -= 15
    t223.x -= 15
    t224.x += 15
    t225.x += 15
    t226.x += 15
    t227.x -= 15
    t228.x -= 15
    t229.x -= 15
    t230.x += 15
    t231.x += 15
    t232.x += 15
    t233.x -= 15
    t234.x -= 15
    t235.x -= 15
    t236.x += 15
    t237.x += 15
    t238.x += 15
    t239.x -= 15
    t240.x -= 15
    t241.x -= 15
    t242.x -= 15
    t243.x -= 15
    t244.x -= 15
    t245.x += 15
    t246.x += 15
    t247.x += 15
    t248.x -= 15
    t249.x -= 15
    t250.x -= 15
    t251.x += 15
    t252.x += 15
    t253.x += 15
    t254.x -= 15
    t255.x -= 15
    t256.x -= 15
    t257.x += 15
    t258.x += 15
    t259.x += 15
    t260.x -= 15
    t261.x -= 15
    t262.x -= 15
    t263.x += 15
    t264.x += 15
    t265.x += 15
    t266.x -= 15
    t267.x -= 15
    t268.x -= 15
    t269.x += 15
    t270.x += 15
    t271.x += 15
    t272.x -= 15
    t273.x -= 15
    t274.x -= 15
    t275.x += 15
    t276.x += 15
    t277.x += 15
    t278.x -= 15
    t279.x -= 15
    t280.x -= 15
    t281.x += 15
    t282.x += 15
    t283.x += 15
    t284.x -= 15
    t285.x -= 15
    t286.x -= 15
    t287.x += 15
    t288.x += 15
    t289.x += 15
    t290.x -= 15
    t291.x -= 15
    t292.x -= 15
    t293.x += 15
    t294.x += 15
    t295.x += 15
    t296.x -= 15
    t297.x -= 15
    t298.x -= 15
    t299.x += 15
    t300.x += 15
    t301.x += 15
    t302.x -= 15
    t303.x -= 15
    t304.x -= 15
    g5.x -= 15
    g6.x += 15
    g7.x -= 15
    if (b >= 1600) {
      fill(255, 0, 0, 100)
      rect(w, 400, 35000, 200)
      w -= 500
    }
    if (b >= 1620) {
      g8.y -= 3
      g9.y -= 3
      g10.y -= 3
      g11.y -= 3
      g12.y -= 3
      g13.y -= 3
      g14.y -= 3
    }
    if (g8.y <= 450) {
      g8.y = 450
    }
    if (g9.y <= 450) {
      g9.y = 450
    }
    if (g10.y <= 450) {
      g10.y = 450
    }
    if (g11.y <= 450) {
      g11.y = 450
    }
    if (g12.y <= 450) {
      g12.y = 450
    }
    if (g13.y <= 450) {
      g13.y = 450
    }
    if (g14.y <= 450) {
      g14.y = 450
    }
    if (b >= 1680) {
      g8.y += 10
      g9.y += 10
      g10.y += 10
      g11.y += 10
      g12.y += 10
      g13.y += 10
      g14.y += 10
    }
    s58.draw()
    s59.draw()
    s60.draw()
    s61.draw()
    s62.draw()
    s63.draw()
    s64.draw()
    s65.draw()
    s66.draw()
    s67.draw()
    s68.draw()
    s69.draw()
    s70.draw()
    s71.draw()
    s72.draw()
    s73.draw()
    s74.draw()
    s75.draw()
    s76.draw()
    s77.draw()
    s78.draw()
    s79.draw()
    s80.draw()
    s81.draw()
    s82.draw()
    s83.draw()
    s84.draw()
    s85.draw()
    s86.draw()
    s87.draw()
    s88.draw()
    s89.draw()
    s90.draw()
    s91.draw()
    s92.draw()
    s93.draw()
    s94.draw()
    s95.draw()
    s96.draw()
    s97.draw()
    s98.draw()
    s99.draw()
    s100.draw()
    s101.draw()
    s102.draw()
    s103.draw()
    s104.draw()
    s105.draw()
    s106.draw()
    s107.draw()
    s108.draw()
    s109.draw()
    s110.draw()
    s111.draw()
    s112.draw()
    s113.draw()
    t179.draw()
    t180.draw()
    t181.draw()
    t182.draw()
    t183.draw()
    t184.draw()
    t185.draw()
    t186.draw()
    t187.draw()
    s114.draw()
    t188.draw()
    t189.draw()
    t190.draw()
    t191.draw()
    t192.draw()
    t193.draw()
    t194.draw()
    t195.draw()
    t196.draw()
    s115.draw()
    s116.draw()
    s117.draw()
    s118.draw()
    t197.draw()
    t198.draw()
    t199.draw()
    t200.draw()
    t201.draw()
    t202.draw()
    t203.draw()
    t204.draw()
    t205.draw()
    t206.draw()
    t207.draw()
    t208.draw()
    t209.draw()
    t210.draw()
    t211.draw()
    t212.draw()
    t213.draw()
    t214.draw()
    t215.draw()
    t216.draw()
    t217.draw()
    t218.draw()
    t219.draw()
    t220.draw()
    t221.draw()
    t222.draw()
    t223.draw()
    s119.draw()
    t224.draw()
    t225.draw()
    t226.draw()
    t227.draw()
    t228.draw()
    t229.draw()
    t230.draw()
    t231.draw()
    t232.draw()
    t233.draw()
    t234.draw()
    t235.draw()
    t236.draw()
    t237.draw()
    t238.draw()
    t239.draw()
    t240.draw()
    t241.draw()
    s120.draw()
    s121.draw()
    g5.draw()
    g6.draw()
    g7.draw()
    g8.draw()
    g9.draw()
    g10.draw()
    g11.draw()
    g12.draw()
    g13.draw()
    g14.draw()
    s122.draw()
    s123.draw()
    s124.draw()
    s125.draw()
    s126.draw()
    s127.draw()
    s128.draw()
    s129.draw()
    s130.draw()
    s131.draw()
    s132.draw()
    s133.draw()
    t242.draw()
    t243.draw()
    t244.draw()
    t245.draw()
    t246.draw()
    t247.draw()
    t248.draw()
    t249.draw()
    t250.draw()
    t251.draw()
    t252.draw()
    t253.draw()
    t254.draw()
    t255.draw()
    t256.draw()
    t257.draw()
    t258.draw()
    t259.draw()
    t260.draw()
    t261.draw()
    t262.draw()
    t263.draw()
    t264.draw()
    t265.draw()
    t266.draw()
    t267.draw()
    t268.draw()
    t269.draw()
    t270.draw()
    t271.draw()
    t272.draw()
    t273.draw()
    t274.draw()
    t275.draw()
    t276.draw()
    t277.draw()
    t278.draw()
    t279.draw()
    t280.draw()
    t281.draw()
    t282.draw()
    t283.draw()
    t284.draw()
    t285.draw()
    t286.draw()
    t287.draw()
    t288.draw()
    t289.draw()
    t290.draw()
    t291.draw()
    t292.draw()
    t293.draw()
    t294.draw()
    t295.draw()
    t296.draw()
    t297.draw()
    t298.draw()
    t299.draw()
    t300.draw()
    t301.draw()
    t302.draw()
    t303.draw()
    t304.draw()
    s58.update()
    s59.update()
    s60.update()
    s61.update()
    s62.update()
    s63.update()
    s64.update()
    s65.update()
    s66.update()
    s67.update()
    s68.update()
    s69.update()
    s70.update()
    s71.update()
    s72.update()
    s73.update()
    s74.update()
    s75.update()
    s76.update()
    s77.update()
    s78.update()
    s79.update()
    s80.update()
    s81.update()
    s82.update()
    s83.update()
    s84.update()
    s85.update()
    s86.update()
    s87.update()
    s88.update()
    s89.update()
    s90.update()
    s91.update()
    s92.update()
    s93.update()
    s94.update()
    s95.update()
    s96.update()
    s97.update()
    s98.update()
    s99.update()
    s100.update()
    s101.update()
    s102.update()
    s103.update()
    s104.update()
    s105.update()
    s106.update()
    s107.update()
    s108.update()
    s109.update()
    s110.update()
    s111.update()
    s112.update()
    s113.update()
    t179.update()
    t180.update()
    t181.update()
    t182.update()
    t183.update()
    t184.update()
    t185.update()
    t186.update()
    s114.update()
    t187.update()
    t188.update()
    t189.update()
    t190.update()
    t191.update()
    t192.update()
    t193.update()
    t194.update()
    t195.update()
    t196.update()
    s115.update()
    s116.update()
    s117.update()
    s118.update()
    t197.update()
    t198.update()
    t199.update()
    t200.update()
    t201.update()
    t202.update()
    t203.update()
    t204.update()
    t205.update()
    t206.update()
    t207.update()
    t208.update()
    t209.update()
    t210.update()
    t211.update()
    t212.update()
    t213.update()
    t214.update()
    t215.update()
    t216.update()
    t217.update()
    t218.update()
    t219.update()
    t220.update()
    t221.update()
    t222.update()
    t223.update()
    s119.update()
    t224.update()
    t225.update()
    t226.update()
    t227.update()
    t228.update()
    t229.update()
    t230.update()
    t231.update()
    t232.update()
    t233.update()
    t234.update()
    t235.update()
    t236.update()
    t237.update()
    t238.update()
    t239.update()
    t240.update()
    t241.update()
    g5.update()
    g6.update()
    g7.update()
    g8.update()
    g9.update()
    g10.update()
    g11.update()
    g12.update()
    g13.update()
    g14.update()
    s120.update()
    s121.update()
    s122.update()
    s123.update()
    s124.update()
    s125.update()
    s126.update()
    s127.update()
    s128.update()
    s129.update()
    s130.update()
    s131.update()
    s132.update()
    s133.update()
    t242.update()
    t243.update()
    t244.update()
    t245.update()
    t246.update()
    t247.update()
    t248.update()
    t249.update()
    t250.update()
    t251.update()
    t252.update()
    t253.update()
    t254.update()
    t255.update()
    t256.update()
    t257.update()
    t258.update()
    t259.update()
    t260.update()
    t261.update()
    t262.update()
    t263.update()
    t264.update()
    t265.update()
    t266.update()
    t267.update()
    t268.update()
    t269.update()
    t270.update()
    t271.update()
    t272.update()
    t273.update()
    t274.update()
    t275.update()
    t276.update()
    t277.update()
    t278.update()
    t279.update()
    t280.update()
    t281.update()
    t282.update()
    t283.update()
    t284.update()
    t285.update()
    t286.update()
    t287.update()
    t288.update()
    t289.update()
    t290.update()
    t291.update()
    t292.update()
    t293.update()
    t294.update()
    t295.update()
    t296.update()
    t297.update()
    t298.update()
    t299.update()
    t300.update()
    t301.update()
    t302.update()
    t303.update()
    t304.update()
    //map
    U.draw()
    U.update()
    U.fall()
    for (var lives = 0; lives < life; lives = lives + 1) {
      fill(135, 206, 250, 200)
      ellipse(lives * 50 + 30, 30, 40)
    }
    if (U.position.y == 470) {
      jumpcount = 0
    }
    if (U.position.x < 30) {
      U.position.x = 25
    }
    if (U.position.x > 670) {
      U.position.x = 675
    }
    if (b >= 3000) {
      end = true
      end2 = true
    }
    if (end == true) {
      if (U.position.x <= 100) {
        U.position.x += 2
        if (U.position.x > 100) {
          U.position.x = 100
        }
      }
      if (U.position.x > 100) {
        U.position.x -= 2
        if (U.position.x < 100) {
          U.position.x = 100
        }
      }
      if (b >= 3850) {
        free -= 2
      }
      if (free < -150) {
        free = -150
      }
      j -= 1
      if (j <= -450) {
        j = -450
      }
      if (b >= 3700) {
        prison += 5
      }
      if (b >= 3950) {
        tnks += 5
      }
      if (tnks >= 180) {
        tnks = 180
      }
      if (b >= 4200) {
        fin += 5
      }
      if (fin >= 0) {
        fin = 0
      }
      if (b >= 4600) {
        gamestate = 0
        cameraX = 0
        cameraY = 0
        gameover = false
        jumpcount = 0
        t = 0
        g = 0
        b = 0
        screen = 0
        beat = 1
        life = 3
        end2 = false
        story = 0
        again = 10000000
        damage1 = false
        damage2 = false
        boost1 = 0
        boost2 = 0
        onehit = false
        twohit = false
        eye = 0
        lid = 60
        bat = 60
        mouth = 90
        face = 0
        boss = 0
        ded = 0
        w = 700
        j = 100
        prison = 0
        free = 0
        tnks = -300
        fin = -1200
      }
      push()
      textStyle(BOLD)
      textAlign(CENTER)
      textSize(100)
      text('Thank you!!', 350, tnks)
      pop()
      push()
      translate(j + free, 0)
      fill(255, 140, 0, 200)
      ellipse(880, 470, 60)
      fill(255, 200)
      ellipse(867, 470, 20)
      ellipse(893, 470, 20)
      fill(0, 220)
      ellipse(863, 470, 12)
      ellipse(889, 470, 12)
      fill(127, 255, 0, 200)
      ellipse(960, 470, 60)
      fill(255, 200)
      ellipse(947, 470, 20)
      ellipse(973, 470, 20)
      fill(0, 220)
      ellipse(943, 470, 12)
      ellipse(969, 470, 12)
      fill(255, 192, 203, 200)
      ellipse(1040, 470, 60)
      fill(255, 200)
      ellipse(1027, 470, 20)
      ellipse(1053, 470, 20)
      fill(0, 220)
      ellipse(1023, 470, 12)
      ellipse(1049, 470, 12)
      fill('red')
      translate(0, prison)
      rect(800, 480, 310, 30)
      rect(800, 180, 310, 20)
      rect(810, 180, 10, 400)
      rect(880, 180, 10, 400)
      rect(950, 180, 10, 400)
      rect(1020, 180, 10, 400)
      rect(1090, 180, 10, 400)
      pop()
      push()
      fill(0)
      rect(0, fin, 700, 600)
      pop()
    }
  }
}

function keyPressed() {
  if (gameover == false && end2 == false) {
    if (gamestate == 1 || gamestate == 2 || gamestate == 3) {
      if (jumpcount < 2) {
        if (keyCode == 32) {
          U.jump()
          jumpcount += 1
        }
      }
    }
  }
  if (keyCode == 83) {
    U.drop()
  }
  if (gamestate == 4) {
    if (keyCode == 13) {
      gamestate = 3
    }
    if (keyCode == 27) {
      gamestate = 0
      cameraX = 0
      cameraY = 0
      gameover = false
      jumpcount = 0
      t = 0
      g = 0
      b = 0
      screen = 0
      beat = 1
      life = 3
      end2 = false
      story = 0
      again = 10000000
      damage1 = false
      damage2 = false
      boost1 = 0
      boost2 = 0
      onehit = false
      twohit = false
      eye = 0
      lid = 60
      bat = 60
      mouth = 90
      face = 0
      boss = 0
      ded = 0
      w = 700
      j = 100
      prison = 0
      free = 0
      tnks = -300
      fin = -1200
      U.position.x = 100
    }
  }
  if (gamestate == 5) {
    if (keyCode == 13) {
      gamestate = 2
    }
    if (keyCode == 27) {
      gamestate = 0
      cameraX = 0
      cameraY = 0
      gameover = false
      jumpcount = 0
      t = 0
      g = 0
      b = 0
      screen = 0
      beat = 1
      life = 3
      end2 = false
      story = 0
      again = 10000000
      damage1 = false
      damage2 = false
      boost1 = 0
      boost2 = 0
      onehit = false
      twohit = false
      eye = 0
      lid = 60
      bat = 60
      mouth = 90
      face = 0
      boss = 0
      ded = 0
      w = 700
      j = 100
      prison = 0
      free = 0
      tnks = -300
      fin = -1200
      U.position.x = 100
    }
  }
}

function mousePressed() {
  if (mouseX >= 160 && mouseX <= 540 && mouseY >= 100 && mouseY <= 250) {
    if (gamestate == 0 && t > 330) {
      gamestate = 1
    }
  }
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints
  let halfAngle = angle / 2.0
  beginShape()
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2
    let sy = y + sin(a) * radius2
    vertex(sx, sy)
    sx = x + cos(a + halfAngle) * radius1
    sy = y + sin(a + halfAngle) * radius1
    vertex(sx, sy)
  }
  endShape(CLOSE)
}

function preload() {
  mainmenu = loadSound('mainmenu.mp3')
  mainmenu2 = loadSound('mainmenu2.mp3')
  fight = loadSound('fight.mp3')
  fight2 = loadSound('fight2.mp3')
  ow = loadSound('ow.mp3')
}
