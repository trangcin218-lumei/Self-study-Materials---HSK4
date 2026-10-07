// DỮ LIỆU CỦA WEBSITE — bạn chỉ cần sửa file này để thêm nội dung.
// Mỗi bài: [số bài, tiêu đề tiếng Trung, tiêu đề tiếng Anh, [các điểm ngữ pháp]]
const LESSONS = [
 [1,"简单的爱情","Simple love",["不仅……也/还/而且……","从来","刚","即使……也……","(在)……上"]],
 [2,"真正的朋友","A true friend",["正好","差不多","尽管","却","而"]],
 [3,"经理对我印象不错","I've made a good impression on the manager",["挺","本来","另外","首先……其次……","不管"]],
 [4,"不要太着急赚钱","Don't be anxious to make money",["以为","原来","并","按照","甚至"]],
 [5,"只买对的，不买贵的","Buy the right, not the expensive",["肯定","再说","实际","对……来说","尤其"]],
 [6,"一分钱一分货","The higher the price, the better the quality",["竟然","倍","值得","其中","(在)……下"]],
 [7,"最好的医生是自己","The best doctor is yourself",["估计","来不及","离合词重叠","要是","既……又/也/还……"]],
 [8,"生活中不缺少美","Beauty is not rare in life",["使","只要","可是","因此","往往"]],
 [9,"阳光总在风雨后","The sun will shine again after the storm",["难道","通过","可是","结果","上"]],
 [10,"幸福的标准","Standards of happiness",["不过","确实","在……看来","由于","比如"]],
 [11,"读书好，读好书，好读书","It's good to read; read good books",["连","否则","无论","然而","同时"]],
 [12,"用心发现世界","Discover the world with your heart",["并且","再……也……","对于","名量词重叠","相反"]],
 [13,"喝着茶看京剧","Drink tea while watching Beijing opera",["大概","偶尔","由","进行","随着"]],
 [14,"保护地球母亲","Protect our Mother Earth",["够","以","既然","于是","什么的"]],
 [15,"教育孩子的艺术","The art of educating children",["想起来","弄","千万","来","左右"]],
 [16,"生活可以更美好","Life can be better",["可","恐怕","到底","拿……来说","救"]],
 [17,"人与自然","Humans and nature",["倒","干","趟","为了……而……","仍然"]],
 [18,"科技与世界","Science, technology and the world",["是否","受不了","接着","除此以外","把……叫作……"]],
 [19,"生活的味道","Taste of life",["疑问代词活用表示任指","上","出来","总的来说","在于"]],
 [20,"路上的风景","The view along the way",["V+着+V+着","一……就……","究竟","起来","V+起"]]
];
// Từ vựng: [từ, pinyin, từ loại, nghĩa, số bài]. Đây là MẪU — hãy thêm tiếp theo cùng định dạng.
const VOCAB = [
 ["不仅","bùjǐn","conj.","không chỉ",1],
 ["差不多","chàbuduō","adv.","gần như, xấp xỉ",2],
 ["超过","chāoguò","v.","vượt quá",1],
 ["成功","chénggōng","v./adj.","thành công",1],
 ["抽烟","chōu yān","v.","hút thuốc",1],
 ["出现","chūxiàn","v.","xuất hiện",1],
 ["刚","gāng","adv.","vừa mới",1],
 ["从来","cónglái","adv.","từ trước đến nay",1],
 ["尽管","jǐnguǎn","conj.","mặc dù",2],
 ["值得","zhídé","v.","đáng",6]
];
// Phần Viết — đề tự soạn theo dạng đề HSK4.
// Phần 1: sắp xếp các cụm từ thành câu hoàn chỉnh. Phần 2: viết câu có từ cho sẵn.
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
