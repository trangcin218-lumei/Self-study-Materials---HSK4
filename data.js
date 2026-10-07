// SITE DATA — edit this file to add content. 网站数据：编辑此文件即可添加内容。
// Each lesson: [number, Chinese title, English title, [grammar points]]
const LESSONS = [
 [1,"简单的爱情","Tình yêu giản đơn",["不仅……也/还/而且……","从来","刚","即使……也……","(在)……上"]],
 [2,"真正的朋友","Người bạn chân chính",["正好","差不多","尽管","却","而"]],
 [3,"经理对我印象不错","Giám đốc có ấn tượng tốt về tôi",["挺","本来","另外","首先……其次……","不管"]],
 [4,"不要太着急赚钱","Đừng quá vội kiếm tiền",["以为","原来","并","按照","甚至"]],
 [5,"只买对的，不买贵的","Chỉ mua đồ đúng, không mua đồ đắt",["肯定","再说","实际","对……来说","尤其"]],
 [6,"一分钱一分货","Tiền nào của nấy",["竟然","倍","值得","其中","(在)……下"]],
 [7,"最好的医生是自己","Bác sĩ giỏi nhất là chính mình",["估计","来不及","离合词重叠","要是","既……又/也/还……"]],
 [8,"生活中不缺少美","Cuộc sống không thiếu cái đẹp",["使","只要","可是","因此","往往"]],
 [9,"阳光总在风雨后","Nắng luôn đến sau mưa gió",["难道","通过","可是","结果","上"]],
 [10,"幸福的标准","Tiêu chuẩn của hạnh phúc",["不过","确实","在……看来","由于","比如"]],
 [11,"读书好，读好书，好读书","Đọc sách tốt, đọc sách hay, thích đọc sách",["连","否则","无论","然而","同时"]],
 [12,"用心发现世界","Dùng tâm khám phá thế giới",["并且","再……也……","对于","名量词重叠","相反"]],
 [13,"喝着茶看京剧","Vừa uống trà vừa xem kinh kịch",["大概","偶尔","由","进行","随着"]],
 [14,"保护地球母亲","Bảo vệ Trái Đất mẹ",["够","以","既然","于是","什么的"]],
 [15,"教育孩子的艺术","Nghệ thuật dạy dỗ con",["想起来","弄","千万","来","左右"]],
 [16,"生活可以更美好","Cuộc sống có thể tốt đẹp hơn",["可","恐怕","到底","拿……来说","救"]],
 [17,"人与自然","Con người và thiên nhiên",["倒","干","趟","为了……而……","仍然"]],
 [18,"科技与世界","Khoa học công nghệ và thế giới",["是否","受不了","接着","除此以外","把……叫作……"]],
 [19,"生活的味道","Hương vị cuộc sống",["疑问代词活用表示任指","上","出来","总的来说","在于"]],
 [20,"路上的风景","Phong cảnh trên đường",["V+着+V+着","一……就……","究竟","起来","V+起"]]
];
// Vocabulary: [word, pinyin, part of speech, English meaning, lesson]. SAMPLE — add more in the same format.
const VOCAB = [
 ["不仅","bùjǐn","conj.","not only",1],
 ["差不多","chàbuduō","adv.","almost; about the same",2],
 ["超过","chāoguò","v.","to exceed",0],
 ["成功","chénggōng","v./adj.","to succeed; success",0],
 ["抽烟","chōu yān","v.","to smoke",0],
 ["出现","chūxiàn","v.","to appear",0],
 ["刚","gāng","adv.","just (now)",1],
 ["从来","cónglái","adv.","all along; (从来不) never",1],
 ["尽管","jǐnguǎn","conj.","although; even though",2],
 ["值得","zhídé","v.","to be worth",6]
];
// Writing — original practice items in HSK4 format.
// Part 1: arrange the words into a sentence. Part 2: write a sentence using the given word.
const WRITE1 = [
 {w:["我","刚","来到","北京"],a:"我刚来到北京"},
 {w:["他","从来","不","迟到"],a:"他从来不迟到"},
 {w:["即使下雨","我","也","要去"],a:"即使下雨，我也要去"},
 {w:["这件衣服","很","值得","买"],a:"这件衣服很值得买"},
 {w:["难道","你","忘了","吗"],a:"难道你忘了吗"}
];
const WRITE2 = [
 {w:"够",s:"我的钱不够买这本书。"},
 {w:"无论",s:"无论天气怎么样，我都去跑步。"},
 {w:"并且",s:"他很聪明，并且很努力。"},
 {w:"尽管",s:"尽管很累，他还是完成了工作。"}
];

// Starter words (unit 0) — [word, pinyin, POS, English meaning, unit]
VOCAB.push(
["爱情","àiqíng","n.","love (romantic)",0],["安全","ānquán","adj.","safe",0],["按时","ànshí","adv.","on time",0],
["按照","ànzhào","prep.","according to",0],["保护","bǎohù","v.","to protect",0],["抱","bào","v.","to hug; to carry in arms",0],
["报名","bàomíng","v.","to sign up",0],["本来","běnlái","adv.","originally",0],["笨","bèn","adj.","stupid; clumsy",0],
["笔记本","bǐjìběn","n.","notebook",0],["毕业","bìyè","v.","to graduate",0],["遍","biàn","m.","times (whole action)",0],
["表格","biǎogé","n.","form; table",0],["表扬","biǎoyáng","v.","to praise",0],["饼干","bǐnggān","n.","biscuit; cookie",0],
["博士","bóshì","n.","PhD; doctor",0],["不但","bùdàn","conj.","not only",0],["不得不","bùdébù","adv.","have no choice but to",0],
["不管","bùguǎn","conj.","no matter (what)",0],["参观","cānguān","v.","to visit; to tour",0],["尝","cháng","v.","to taste",0],
["长城","Chángchéng","n.","the Great Wall",0],["长江","Chángjiāng","n.","Yangtze River",0],["场","chǎng","m.","(for events, games)",0],
["吵","chǎo","v./adj.","to quarrel; noisy",0],["诚实","chéngshí","adj.","honest",0],["成为","chéngwéi","v.","to become",0],
["重新","chóngxīn","adv.","anew; again",0]);
