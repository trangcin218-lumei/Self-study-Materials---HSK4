// Luyện thi HSK4 (Viết + Đọc) — mỗi dạng bài theo khuôn 4 bước.
// g: giải thích bình dân | e: điểm dễ sai | x: ví dụ [nhãn, tiếng Trung, pinyin, nghĩa] | c: thử thách
const EXAM=[
{part:'Viết',title:'Hoàn thành câu (xếp các cụm từ lộn xộn)',
 g:['Đề cho 3–5 cụm từ bị xáo trộn, bạn xếp thành 1 câu hoàn chỉnh.','Công thức vàng: <b>Ai + (khi nào / ở đâu / thế nào) + làm gì + cái gì</b>.','Mẹo: tìm <b>động từ chính</b> trước, rồi gắn 也, 都, 就, 才, 还 ngay <b>trước động từ</b>.'],
 e:['Tiếng Việt nói “ăn cơm <b>ở nhà</b>”, tiếng Trung phải là “<b>在家</b>吃饭”: địa điểm đứng <b>trước</b> động từ.','Câu có 把 thì xếp theo khuôn: <b>把 + vật + động từ + kết quả</b> (ví dụ 完成了).'],
 x:[['Giao tiếp','我们在咖啡馆见面。','Wǒmen zài kāfēiguǎn jiànmiàn.','Chúng ta gặp nhau ở quán cà phê.'],['Dạng đề thi: 把 / 作业 / 我 / 完成了','我把作业完成了。','Wǒ bǎ zuòyè wánchéng le.','Tôi đã làm xong bài tập.']],
 c:{type:'order',q:'Xếp thành câu: 经常 / 他 / 在图书馆 / 看书',w:['经常','他','在图书馆','看书'],a:'他经常在图书馆看书',why:'Người làm (他) → tần suất (经常) → nơi chốn (在图书馆) → hành động (看书).'}},
{part:'Viết',title:'Dùng từ cho sẵn để viết câu',
 g:['Đề cho 1 từ (kèm hình), bạn viết 1 câu có dùng từ đó.','Viết <b>ngắn, chắc, đúng</b> ăn điểm hơn viết dài mà sai.','Dùng khuôn có sẵn: 尽管…但是/可是/还是…, 如果…就…, 因为…所以…'],
 e:['Dùng 尽管 mà quên vế sau (但是/可是/还是) thì câu bị hụt.','Sai nét chữ Hán hoặc quên dấu câu bị trừ điểm. Tuyệt đối không viết pinyin thay chữ Hán.'],
 x:[['Giao tiếp','尽管天气很冷，我还是去跑步了。','Jǐnguǎn tiānqì hěn lěng, wǒ háishi qù pǎobù le.','Dù trời lạnh, tôi vẫn đi chạy bộ.'],['Dạng đề thi (từ cho sẵn: 否则)','你要早点儿睡，否则明天起不来。','Nǐ yào zǎodiǎnr shuì, fǒuzé míngtiān qǐ bù lái.','Bạn nên ngủ sớm, nếu không mai không dậy nổi.']],
 c:{type:'free',q:'Dịch sang tiếng Trung, dùng 尽管: “Mặc dù bận, anh ấy vẫn đến họp đúng giờ.”',m:'尽管他很忙，还是准时来开会了。'}},
{part:'Đọc',title:'Chọn từ điền vào chỗ trống',
 g:['Đọc <b>cả câu</b> trước, rồi đoán chỗ trống cần loại từ gì (động từ, tính từ hay từ nối).','Xem từ nào hay đi cặp với từ bên cạnh (kiểu “tính từ + danh từ”). Đừng dịch từng chữ.'],
 e:['<b>按时</b> là đúng giờ quy định, <b>及时</b> là kịp lúc.','<b>以为</b> là “tưởng là” (hóa ra sai), <b>认为</b> là “cho rằng”.','Một chữ “rất” của tiếng Việt có thể là 很, 非常, 十分 hay 挺: phải nhìn vị trí và ngữ cảnh.'],
 x:[['Giao tiếp','我以为今天是周末，结果还要上班。','Wǒ yǐwéi jīntiān shì zhōumò, jiéguǒ hái yào shàngbān.','Tôi tưởng hôm nay là cuối tuần, hóa ra vẫn phải đi làm.'],['Dạng đề thi: 这个问题很重要，我们必须＿＿解决。(A 及时 B 按时) → A','这个问题很重要，我们必须及时解决。','Zhège wèntí hěn zhòngyào, wǒmen bìxū jíshí jiějué.','Vấn đề này rất quan trọng, chúng ta phải giải quyết kịp thời.']],
 c:{type:'mcq',q:'老师说下午三点开会，请大家＿＿到。',o:['A 按时','B 及时'],a:'A 按时',why:'按时 = đúng giờ đã quy định; 及时 = kịp lúc, kịp thời.'}},
{part:'Đọc',title:'Sắp xếp thứ tự 3 câu A, B, C',
 g:['Việc đầu tiên là tìm <b>câu mở đầu</b>: câu giới thiệu nhân vật hoặc sự việc, không có từ nối ở đầu.','Câu có 所以, 但是, 可是, 结果, 而且, 它, 这 thường đứng <b>sau</b>, vì nó đang “nối” với ý đã nói trước.'],
 e:['Đừng xếp theo kiểu “nghe xuôi tai” bằng tiếng Việt. Hãy bám vào cặp liên từ: <b>虽然…可是…</b>, <b>因为…所以…</b>, <b>不但…而且…</b>.','Vế có 虽然, 因为 luôn đứng trước.'],
 x:[['Giao tiếp','首先洗菜，然后切菜，最后炒菜。','Shǒuxiān xǐ cài, ránhòu qiē cài, zuìhòu chǎo cài.','Trước tiên rửa rau, rồi thái, cuối cùng xào.'],['Dạng đề thi: A 可是他们还是准时到了公司 / B 虽然今天路上堵车很厉害 / C 小李和小王早上七点就出发了 → C – B – A','小李和小王早上七点就出发了，虽然今天路上堵车很厉害，可是他们还是准时到了公司。','Xiǎo Lǐ hé Xiǎo Wáng zǎoshang qī diǎn jiù chūfā le, suīrán jīntiān lùshang dǔchē hěn lìhai, kěshì tāmen háishi zhǔnshí dào le gōngsī.','Tiểu Lý và Tiểu Vương 7 giờ sáng đã xuất phát, dù đường kẹt xe nặng, họ vẫn đến công ty đúng giờ.']],
 c:{type:'mcq',q:'Sắp xếp: A 所以我决定明天去医院 / B 我最近一直咳嗽 / C 而且晚上睡不好',o:['A – B – C','B – C – A','C – A – B'],a:'B – C – A',why:'B nêu sự việc, C bổ sung (而且), A là kết quả (所以).'}},
{part:'Đọc',title:'Đọc hiểu đoạn văn ngắn',
 g:['<b>Đọc câu hỏi trước</b>, gạch từ khóa, rồi mới dò trong bài.','Đáp án thường là cách nói <b>khác đi</b> của câu trong bài, không phải copy y nguyên.'],
 e:['Ý chính thường nằm <b>sau</b> các từ chuyển ý: 但是, 可是, 不过, 然而.','Thấy đáp án có chữ quen giống hệt trong bài là chọn ngay thì rất dễ dính bẫy: hãy kiểm tra lại ý có khớp không.'],
 x:[['Giao tiếp','我本来想去看电影，不过朋友突然有事，所以我在家看书。','Wǒ běnlái xiǎng qù kàn diànyǐng, búguò péngyou tūrán yǒu shì, suǒyǐ wǒ zài jiā kàn shū.','Ban đầu tôi định đi xem phim, nhưng bạn đột nhiên có việc nên tôi ở nhà đọc sách.'],['Dạng đề thi: ★ 小王觉得跑步：A 很浪费时间 B 让他心情好 C 不太累 → B','小王每天都坚持跑步。他说虽然有时候很累，但是跑完步心情特别好。','Xiǎo Wáng měitiān dōu jiānchí pǎobù. Tā shuō suīrán yǒu shíhou hěn lèi, dànshì pǎo wán bù xīnqíng tèbié hǎo.','Tiểu Vương ngày nào cũng kiên trì chạy bộ. Anh nói tuy đôi lúc rất mệt, nhưng chạy xong tâm trạng đặc biệt tốt.']],
 c:{type:'mcq',q:'我本来打算坐地铁，不过今天人太多了，所以我决定走路去公司。★ 他今天怎么去公司？',o:['A 坐地铁','B 走路','C 开车'],a:'B 走路',why:'Ý chính nằm sau 不过 và 所以: “决定走路”.'}}
];
