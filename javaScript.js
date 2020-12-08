var lastbook="";
var firstbook="";
var secondbook="";

var category ="";
var category2 ="";
var category3 ="";
var category4 ="";

var thebook ="";
var number ="";

function start() {
  showbookinfointerest();
  showbookinfo();
}

$('test_label').click(function(){});


if(localStorage) {
	$(document).ready(function() {
		    $(".bookcoverinterest").click(function() {
            window.thebook = $(this).attr('src');
            window.localStorage.setItem('thebook', thebook);
            window.location.href="bookinfo.html";
    });
  });
}

function showbookinfointerest() {
  var pickedbook = localStorage.getItem('thebook');
  if (typeof(Storage) !== "undefined") {
    if (pickedbook=="d1.jpg") {
      $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Feral Detective </h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Jonathan Lethem <br>Narrator: Zosia Mamet</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>“One of America’s greatest storytellers.” —Washington Post<br><br>Phoebe Siegler first meets Charles Heist in a shabby trailer on the eastern edge of Los Angeles. She’s looking for her friend’s missing daughter, Arabella, and hires Heist to help. A laconic loner who keeps his pet opossum in a desk drawer, Heist intrigues the sarcastic and garrulous Phoebe. Reluctantly, he agrees to help. The unlikely pair navigate the enclaves of desert-dwelling vagabonds and find that Arabella is in serious trouble—caught in the middle of a violent standoff that only Heist, mysteriously, can end. Phoebe’s trip to the desert was always going to be strange, but it was never supposed to be dangerous...<br><br>Jonathan Lethem’s first detective novel since Motherless Brooklyn, The Feral Detective is a singular achievement by one of our greatest writers. </p>";
      } else if (pickedbook=="d2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Shutter Island</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Dennis Lehane <br>Narrator: Tom Stechschulte</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The basis for the blockbuster motion picture directed by Martin Scorsese and starring Leonardo DiCaprio, Shutter Island by New York Times bestselling author Dennis Lehane is a gripping and atmospheric psychological thriller where nothing is quite what it seems. The New York Times calls Shutter Island, “Startlingly original.” The Washington Post raves, “Brilliantly conceived and executed.” A masterwork of suspense and surprise from the author of Mystic River and Gone, Baby, Gone, Shutter Island carries the reader into a nightmare world of madness, mind control, and CIA Cold War paranoia and is unlike anything you’ve ever read before. </p>";
      } else if (pickedbook=="d3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Rule of Fear</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Luke Delaney  <br>Narrator: Paul Panting</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The new novel by Luke Delaney, ex-Met detective and author of the terrifyingly authentic DI Sean Corrigan series. Perfect for fans of Mark Billingham, Peter James and Stuart MacBride.<br><br>Tasked with cleaning up the notorious Grove Wood Estate, Sergeant Jack King is determined to rise to the challenge. But it’s not just drug dealers and petty thugs his team have to worry about. Someone is preying on children and they need to hunt down the culprit, fast.<br><br>Soon King finds himself in over his head: the local residents won’t play ball, and he’s refusing to admit that he’s suffering from PTSD. As the pressures combine, the line between right and wrong starts to blur and King finds himself in a downward spiral. Only he can save himself – but is it already too late?</p>";
      } else if (pickedbook=="d4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Last Man Standing</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: David Baldacci <br>Narrator: Jason Culp</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Seven seconds. That's all it took for Web London to lose everything: his friends, his team, his reputation. Point man of the FBI's super-elite Hostage Rescue Team, Web roared into a blind alley towards a drug leader's lair, only to meet a high-tech, custom-designed ambush that killed everyone around him.<br><br>Coping with the blame-filled words of anguished widows and the suspicions of colleagues, Web tries to put his life back together. To do so, he must discover why he was the one man who lived through the ambush – and find the only other person who came out of the alley alive . . . a ten-year-old boy who has since disappeared. Acting on his instincts, Web believes he knows where the killer will strike next. Only this time, he may not survive the attack.</p>";
      } else if (pickedbook=="d5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Two Minute Rule</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Robert Crais <br>Narrator: Christopher Graybill</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Two minutes can be a lifetime. But break the two minute rule and it's a lifetime in jail. Ask anyone on the wrong side of the law about the two minute rule and they'll tell you that's as long as you can hope for at a robbery before the cops show up.<br><br>But not everyone plays by the rules. When an ageing ex-con finally gets out of jail, freedom doesn't taste too sweet. His son is gunned down in a drive-by shooting. It seems like a random crime, but when the victim is a cop - especially a cop with a con for a father - the motives are never simple.</p>";
      } else if (pickedbook=="q1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Social Media Marketing 2019: Secret Strategies to Become an Influencer of Millions.</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Dave Welch <br>Narrator: K Michael Prince</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Social media is a superb and energizing world, and seeing each of the devices accessible will give you the confidence to build deals or set up an individual relationship with your clients. <br><br> There are many things that you can do to market yourself online. However, you need to do it in a smart way without leaving any penny without a proper return on investment. The book “Social Media Marketing 2019” will help you start growing more followers today and help you automate the process! </p>";
      } else if (pickedbook=="q2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Get Smart: How to Think and Act Like the Most Successful and Highest-Paid People in Every Field</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Brian Tracy  <br>Narrator: Brian Tracy </p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>An accessible guide on training the brain to work effortlessly in your favor-from the international bestselling author of the productivity classic Eat That Frog <br><br> In business and in life, you must be smart to get ahead. As things shift and change quickly, you need to tap into your brain-learn how to think smartly-in order to make sure that you maximize your opportunities. <br><br>In Get Smart!, internationally-acclaimed business guru, speaker, author, and productivity expert Brian Tracy has laid the groundwork on how to easily reconfigure your negative thinking patterns and habits, and reprogram your brain to achieve its maximum potential. In this invaluable book, readers will encounter: <br><br>· The latest brain research on how to think, in order to get results <br>· Practical, easy-to-understand advice and immediately actionable steps and exercises.</p>";
      } else if (pickedbook=="q3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Black Salwar</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Sadat Hasan Manto <br>Narrator: Vanita Mascarenhas</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Sultana, a small town prostitute, migrates to the city with dreams in her eyes. With time however she goes about her tactical ways of seducing people, she always seems to miss her targets. Her business starts going down and her loneliness gets intensely objectified in her desire for the 'Black Salwar' that she needs to complete her ensemble for Muharram.<br><br>This has been translated from the original story 'Kali Salwar' written by Saadat Hasan Manto. Saadat Hasan Manto was the most widely read and the most controversial short-story writer. He was known to write about the hard truths of society that no one dared to talk about. </p>";
      } else if (pickedbook=="q4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Adventures of Huckleberry Finn</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Mark Twain <br>Narrator: Annie Coleman Rothenberg</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Huckleberry Finn is a wonderful story filled with adventure and unforgettable characters that no one who has read it will ever forget. The book is noted for its colorful description of people and places along the Mississippi River. Set in a Southern antebellum society that had ceased to exist about twenty years before the work was published, Adventures of Huckleberry Finn is an often scathing satire on entrenched attitudes, particularly racism. </p>";
      } else if (pickedbook=="q5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>They Both Die at the End</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Adam Silvera <br>Narrator: Bahni Turpin, Michael Crouch</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>From the bestselling author of HISTORY IS ALL YOU LEFT ME comes another unforgettable story of life, loss and making each day count.<br><br>On September 5th, a little after midnight, Death-Cast calls Mateo Torrez and Rufus Emeterio to give them some bad news: they're going to die today. Mateo and Rufus are total strangers, but, for different reasons, they're both looking to make a new friend on their End Day. The good news: there's an app for that. It's called the Last Friend, and through it, Rufus and Mateo are about to meet up for one last great adventure - to live a lifetime in a single day. <br><br>Another beautiful, heartbreaking and life-affirming book from the brilliant Adam Silvera, author of History Is All You Left Me. </p>";
      } else if (pickedbook=="tc1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Iceman</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Anthony Bruno <br>Narrator: Bronson Pinchot</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>At home, Richard Kuklinski was a dedicated suburban family man; on the street, he was the Iceman, a professional hit man and lethal scam artist, a man so heartless he kept one of his victims frozen for over two years to disguise the time of death. His personal body count was over one hundred, but the police couldn’t touch him. Then undercover agent Dominick Polifrone posed as a mobster and began a deadly game of cat and mouse. <br><br>The Iceman chronicles Kuklinski’s grisly career and exposes his murderous double life.</p>";
      } else if (pickedbook=="tc2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Michelle McNamara  <br>Narrator: Gillian Flynn, Gabra Zackman</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Winner of the Goodreads Choice Awards for Nonfiction | Anthony Award Winner | SCIBA Book Award Winner | Finalist for the Edgar Award for Best Fact Crime | Longlisted for the Carnegie Medal for Excellence.<br><br>The haunting true story of the elusive serial rapist turned murderer who terrorized California during the 70s and 80s, and of the gifted journalist who died tragically while investigating the case—which was solved in April 2018.<br><br>The haunting true story of the elusive serial rapist turned murderer who terrorized California for over a decade—and of the gifted journalist who died tragically while investigating the case.<br><br>Introduction by Gillian Flynn • Afterword by Patton Oswalt“A brilliant genre-buster.... Propulsive, can’t-stop-now reading.” —Stephen King</p>";
      } else if (pickedbook=="tc3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Bad Blood: Secrets and Lies in a Silicon Valley Startup</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: John Carreyrou  <br>Narrator: Will Damron</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>'I couldn’t put down this thriller … the perfect book to read by the fire this winter.' Bill Gates, '5 books I loved in 2018'<br><br>WINNER OF THE FINANCIAL TIMES/MCKINSEY BUSINESS BOOK OF THE YEAR AWARD 2018<br><br>The full inside story of the breathtaking rise and shocking collapse of Theranos, the multibillion-dollar biotech startup, by the prize-winning journalist who first broke the story and pursued it to the end, despite pressure from its charismatic CEO and threats by her lawyers.<br><br></p>";
      } else if (pickedbook=="tc4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Killer Across the Table: Unlocking the Secrets of Serial Killers and Predators with the FBI's Original Mindhunter</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: John E. Douglas, Mark Olshaker <br>Narrator: Jonathan Groff</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Performed by Jonathan Groff, star of the hit Netflix show Mindhunter, and featuring an exclusive conversation between John E. Douglas and Jonathan Groff at the end of the audiobook.<br><br>In The Killer Across the Table, John E. Douglas, the legendary FBI criminal profiler, number-one New York Times bestselling author, and inspiration for Netflix’s Mindhunter delves deep into the lives and crimes of four of the most disturbing and complex predatory killers, offering never-before-revealed details about his profiling process, and divulging the strategies used to help crack some of America’s most challenging cases. The Killer Across the Table is narrated by Jonathan Groff, who plays Holden Ford on Mindhunter, the character inspired by John E. Douglas.</p>";
      } else if (pickedbook=="tc5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>I Survived: I married a charming man. Then he tried to kill me. A true story.</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Victoria Cilliers  <br>Narrator: Sophie Roberts</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A chilling, eye-opening story of marriage and attempted murder, revealing the truth about a case that made headlines around the world.<br><br>On Easter Sunday 2015, experienced skydiver Victoria Cilliers undertook a parachute jump, a gift from her husband, British army sergeant Emile Cilliers. Her parachutes failed to open and she plummeted 4,000 feet to the ground, sustaining life-threatening injuries. Miraculously, she survived. Then the police arrived at her door. Someone had tampered with her parachute and they suspected Emile.<br><br>In I Survived Victoria describes how she fell for Emile, and how the charming man she thought she knew gradually revealed a darker side, chipping away at her self-worth until she found it impossible to sift truth from lies. Can she really believe that her husband – the father of their two young children – tried to kill her?</p>";
      } else if (pickedbook=="n1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Keeper of Lost Things</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Ruth Hogan <br>Narrator: Jane Collingwood, Sandra Duncan</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A charming, clever, and quietly moving debut novel of of endless possibilities and joyful discoveries that explores the promises we make and break, losing and finding ourselves, the objects that hold magic and meaning for our lives, and the surprising connections that bind us.<br><br>Anthony Peardew is the keeper of lost things. Forty years ago, he carelessly lost a keepsake from his beloved fiancée, Therese. That very same day, she died unexpectedly. Brokenhearted, Anthony sought consolation in rescuing lost objects—the things others have dropped, misplaced, or accidently left behind—and writing stories about them. Now, in the twilight of his life, Anthony worries that he has not fully discharged his duty to reconcile all the lost things with their owners.</p>";
      } else if (pickedbook=="n2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Mermaid and Mrs. Hancock</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Imogen Hermes Gowar  <br>Narrator: Juliet Stevenson</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>In 1780s London, a prosperous merchant finds his quiet life upended when he unexpectedly receives a most unusual creature—and meets a most extraordinary woman—in this much-lauded, atmospheric debut that examines our capacity for wonder, obsession, and desire with all the magnetism, originality, and literary magic of The Essex Serpent.<br><br>One September evening in 1785, Jonah Hancock hears an urgent knocking on his front door near the docks of London. The captain of one of Jonah’s trading vessels is waiting eagerly on the front step, bearing shocking news. On a voyage to the Far East, he sold the Jonah’s ship for something rare and far more precious: a mermaid. Jonah is stunned—the object the captain presents him is brown and wizened, as small as an infant, with vicious teeth and claws, and a torso that ends in the tail of a fish. It is also dead.</p>";
      } else if (pickedbook=="n3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Conjure Women</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Afia Atakora <br>Narrator: Adenrele Ojo</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>You’re free to decide your future. But how do you escape the ghosts of the past?<br><br>The pale-skinned, black-eyed baby is a bad omen. That’s one thing the people on the old plantation are sure of. The other is that Miss Rue – midwife, healer, crafter of curses – will know what to do.<br><br>But for once Rue doesn’t know. Times have changed since her mother Miss May Belle held the power to influence the life and death of her fellow slaves. Freedom has come. The master’s Big House lies in ruins. But this new world brings new dangers, and Rue’s old magic may be no match for them.<br><br>When sickness sweeps across her tight-knit community, Rue finds herself the focus of suspicion. What secrets does she keep amidst the charred remains of the Big House? Which spells has she conjured to threaten their children? And why is she so wary of the charismatic preacher man who promises to save them all?</p>";
      } else if (pickedbook=="n4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>A Single Thread</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Tracy Chevalier <br>Narrator: Fenella Woolgar</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>FROM THE GLOBALLY BESTSELLING AUTHOR OF GIRL WITH A PEARL EARRING<br><br>The First World War took everything from her. Her brother, her fiancé – and her future. She is now considered a ‘surplus woman’.<br><br>But Violet is also fiercely independent and determined. Escaping her suffocating mother, she moves to Winchester to start a new life –a change that will require courage, resilience and acts of quiet rebellion. And when whispers of another world war surface, she must live with a secret that could change everything…</p>";
      } else if (pickedbook=="n5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Best Kept Secret</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Jeffrey Archer <br>Narrator: Alex Jennings</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>1945. The vote in the House of Lords as to who should inherit the Barrington family fortune has ended in a tie. The Lord Chancellor's deciding vote will cast a long shadow on the lives of Harry Clifton and Giles Barrington.<br><br>Harry returns to America to promote his latest novel, while his beloved Emma goes in search of the little girl who was found abandoned in her father's office on the night he was killed.<br><br>When the General Election is called, Giles Barrington has to defend his seat in the House of Commons and is horrified to discover who the Conservatives select to stand against him. But it is Sebastian Clifton, Harry and Emma's son, who ultimately influences his uncle's fate.</p>";
      } else if (pickedbook=="p1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Faraja Nyalandu on the technological revolution</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Reach for Change <br>Narrator: Sofia Breitholtz, Faraja Nyalandu</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Reach for Change podcast is a collaboration between Reach for Change and Storytel where entrepreneurs, investors, activists and philanthropists give their analyzes and future trendwatch on how we accelerate the speed to reach a more green and socially sustainable world over the next ten years.<br><br>In the tenth episode you will meet Faraja Nyalandu, the Tanzanian lawyer who changed her career path and became a social entrepreneur to help empower young people through innovative digital educational programmes. Faraja tells us about going against the odds, leaving a stable career to pursue a strong idea, wanting to create a better world for children and young people.</p>";
      } else if (pickedbook=="p2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Story - too good to be true</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: John Bernstein, Arto Koskinen <br>Narrator: Trent Pancy</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>When Arto Koskinen made the documentary film about Heinrich Himmler’s physical therapist and healer in the late 1990s, a warning light went off right away for the filmmakers. Or were the bad omens just due to an overactive imagination?<br><br>Historian Antti Matikkala reveals the reasons for the honorary titles bestowed on Felix Kersten, and the film’s producer Jan Wellmann reminisces how it all started.</p>";
      } else if (pickedbook=="p3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Good Morning Nantwich Podcast</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Phill Jupitus <br>Narrator: Phill Jupitus </p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Chapter 9 of Good Morning Nantwich. We’re not happy t’ill you’re not happy is the ninth chapter which Phill reads as an exclusive podcast. This bonus material is available for free online to download on the 5th August 2010.<br><br>‘We’re not happy t’ill you’re not happy’ is the ninth chapter of the book, which Phill reads as an exclusive podcast. This bonus material is available for free online to download now.<br><br>A very amusing recording of one of the chapters that was edited out when the abridgement of Good Morning Nantwich was taking place. This download contains Phill joking, ad-libbing, commenting on page turning and fluffing his lines. A charming piece of audio.</p>";
      } else if (pickedbook=="p4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Per Heggenes on philanthropy</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Reach for Change <br>Narrator: Sofia Breitholtz, Per Heggenes</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Reach for Change podcast is a collaboration between Reach for Change and Storytel where entrepreneurs, investors, activists and philanthropists give their analyzes and future trendwatch on how we accelerate the speed to reach a more green and socially sustainable world over the next ten years.<br><br>In the fifth episode you will meet Per Heggenes, the CEO of the IKEA Foundation, a philanthropy which is funded by INGKA Foundation, owner of Ingka Group, who own most of the IKEA stores worldwide. IKEA Foundation is spending 200 million euros per year to help people who live in vulnerable conditions. Since becoming the Foundation’s first CEO in 2009, Per has led the Foundation’s evolution into a global, grant-making philanthropy that funds programs in more than 45 countries.</p>";
      } else if (pickedbook=="p5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Dox Podcast - Mattias Göransson</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Annika Seward Jensen <br>Narrator: Annika Seward Jensen</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Mattias Göransson, founder and editor-in-chief of Filter magazine. When Sifo asked 42,000 people to rank Sweden's best magazine, Filter was placed in shared first place with the football magazine Offside, where Mattias is also one of the founders. Here he tells about his role models and why storytelling is the best way to convey facts, states what a nice confirmation it was when Aftonbladet's reporter dissed him for not better managing one of the football world's biggest scoop and says to inject the stories directly into the blood.<br><br>Storytel Dox is a podcast for those who are curious about journalists and journalism, who appreciate storytelling and want to hear the stories behind the report. Publisher Annika Seward Jensen talks to a guest who is relevant in connection with Storytel Dox's publication of reports, articles and interviews such as audio books</p>";
      } else if (pickedbook=="t1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Savage Son: A Thriller</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Jack Carr <br>Narrator: Ray Porter</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>INSTANT NEW YORK TIMES BESTSELLER<br><br>In this third high-octane thriller in the “seriously good” (Lee Child, #1 New York Times bestselling author) Terminal List series, former Navy SEAL James Reece must infiltrate the Russian mafia and turn the hunters into the hunted.<br><br>Deep in the wilds of Siberia, a woman is on the run, pursued by a man harboring secrets—a man intent on killing her.<br><br>A traitorous CIA officer has found refuge with the Russian mafia with designs on ensuring a certain former Navy SEAL sniper is put in the ground.<br><br>Half a world away, James Reece is recovering from brain surgery in the Montana wilderness, slowly putting his life back together with the help of investigative journalist Katie Buranek and his longtime friend and SEAL teammate Raife Hastings. Unbeknownst to them, the Russian mafia has set their sights on Reece in a deadly game of cat and mouse.<br><br></p>";
      } else if (pickedbook=="t2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>A Nearly Normal Family</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Mattias Edvardsson <br>Narrator: Richard Armitage, Emily Watson</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Chosen as one of the best seven thrillers of the summer by the New York Times<br><br>A Nearly Normal Family is the stunning psychological thriller from M. T. Edvardsson and asks what would you do if your child was suspected of murder, how far would you go to protect them? Do you want to know the truth? If you loved A. J. Finn’s The Woman in the Window or J. P. Delaney’s The Girl Before, you will love this.<br><br>Every murder case starts with a suspect. What if the suspect is your daughter? Would you believe her, or the evidence against her?</p>";
      } else if (pickedbook=="t3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Dead to Her</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Sarah Pinborough  <br>Narrator: Saskia Maarleveld</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>For fans of Liane Moriarty, Liv Constantine and Lisa Jewell, a twisty psychological thriller about a savvy second wife who will do almost anything to come out on top from the New York Times bestselling author of Behind Her Eyes.<br><br>Being the second wife can be murder...<br><br>'Once a cheat, always a cheat,' they say. Marcie Maddox has worked hard to get where she is after the illicit affair that started her new life a few years ago. But her world of country clubs, yachts and sumptuous houses in Savannah, Georgia, isn’t easy to maintain, no matter how hard she tries. Nor is keeping her husband, Jason, truly interested.<br><br>So, when Jason’s boss brings home a hot new wife from his trip to London, the young Mrs William Radford IV isn’t quite the souvenir everyone expected. Sexy, drop-dead gorgeous and black—Keisha quickly usurps Marcie’s place as the beautiful second wife. </p>";
      } else if (pickedbook=="t4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Wives</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Tarryn Fisher <br>Narrator: Lauren Fortgang</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>New York Times bestselling author Tarryn Fisher delivers a pulse–pounding, fast–paced suspense novel that will leave you breathless. A thriller you won’t be able to put down!<br><br>Thursday’s husband, Seth, has two other wives. She’s never met them, and she doesn’t know anything about them. She agreed to this unusual arrangement because she’s so crazy about him.<br><br>But one day, she finds something. Something that tells a very different—and horrifying—story about the man she married.<br><br>What follows is one of the most twisted, shocking thrillers you’ll ever read.</p>";
      } else if (pickedbook=="t5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Give Me Your Hand</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Megan Abbott <br>Narrator: Chloe Cannon</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>'Megan Abbott at her very best. Cool, crisp, chilling.' Paula Hawkins, author of The Girl on the Train<br><br>You told each other everything. Then she told you too much.<br><br>Kit has risen to the top of her profession and is on the brink of achieving everything she wanted. She hasn’t let anything stop her.<br><br>But now someone else is standing in her way – Diane. Best friends at seventeen, their shared ambition made them inseparable. Until the day Diane told Kit her secret – the worst thing she’d ever done, the worst thing Kit could imagine – and it blew their friendship apart.<br><br>Kit is still the only person who knows what Diane did. And now Diane knows something about Kit that could destroy everything she’s worked so hard for.</p>";
      } else if (pickedbook=="k1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Paddington Goes To Town</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Michael Bond <br>Narrator: Hugh Bonneville</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Original adventures of the classic bear from Darkest Peru, soon to be a major movie star!<br><br>Paddington doesn’t intentionally turn his friend’s wedding into an uproar by getting the wedding ring stuck on his paw. Nor does he mean Mr Curry to slip on his marmalade sandwich in the middle of an important gold shot. But these sort of things just happen to a bear like Paddington!<br><br>Paddington Bear has touched the hearts of adults and children worldwide with his earnest good intentions and humorous misadventures for more than fifty years.</p>";
      } else if (pickedbook=="k2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Pete the Cat: Go, Pete, Go!</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: James Dean <br>Narrator: James Fouhey</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>New York Times bestselling author-artist James Dean brings us a new Pete the Cat adventure, a special reimagining of “The Tortoise and the Hare” as a race between Pete and Turtle, in Pete the Cat: Go, Pete, Go!<br><br>Ding, ding. There’s nothing Pete the Cat loves to do more on a sunny day than ring his little bell and pedal fast on his bicycle. But on this sunny day, Turtle wants to race someone in his new car. Vroom, vroom! Pete and his bicycle are up for the challenge!<br><br>And when Pete crosses the finish line, he proves it’s not where you’re going that matters, it’s how groovy of a time you have getting there!</p>";
      } else if (pickedbook=="k3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Who’ll save Alfie Atkins?</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Gunilla Bergström <br>Narrator: Alan Pryke</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Alfie has just moved. He doesn’t know anyone here. He has to settle for Malcolm – his invisible friend who always does exactly what Alfie wants. But Malcolm never comes when the big boys chase him or soak his jacket with their water pistols. He’s never there then.</p>";
      } else if (pickedbook=="k4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Pages & Co.: Tilly and the Map of Stories</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Anna James <br>Narrator: Aysha Kala</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Third in the modern-classic and bestselling bookwandering series that celebrates all that is best in life: books, adventure, friendship – and cake.<br><br>Strange things are happening. A man comes into Pages & Co looking for a book… then suddenly can’t remember it. Tilly and her family feel like the world is changing – but can’t quite put their finger on why.<br><br>Meanwhile, the Underwoods are expanding their control over bookwandering – and they still have their sights set on Tilly. Leaving the safety of the bookshop, Tilly heads to America to find the legendary Archivists and save bookwandering…<br><br>… or at least, that’s the plan. Wandering in layers of story, Tilly and her friend Oskar come up against dangers they could never have expected, team up with an unexpectedly familiar face, and ultimately find themselves taking on the biggest threat to stories there has ever been.</p>";
      } else if (pickedbook=="k5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Pages & Co.: Tilly and the Bookwanderers</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Anna James <br>Narrator: Aysha Kala</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A magical adventure to delight the imagination. A curl-up-on-the-sofa snuggle of a debut from a uniquely talented author. Eleven year-old Tilly has lived above her grandparents’ bookshop ever since her mother disappeared shortly after she was born. Like the rest of her family, Tilly loves nothing more than to escape into the pages of her favourite stories.<br><br>One day Tilly realises that classic children’s characters are appearing in the shop through the magic of ‘book walking’ – crossing over from the page into real life.<br><br>With the help of Anne of Green Gables and Alice in Wonderland. Tilly is determined to solve the mystery of what happened to her mother all those years ago, so she bravely steps into the unknown, unsure of what adventure lies ahead and what dangers she may face.</p>";
      } else if (pickedbook=="hs1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Deep Sleep Every Night</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Glenn Harrold <br>Narrator: Glenn Harrold</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Join the thousands of people who have overcome their sleep disorders and insomnia by using this superb, high quality hypnosis MP3 by Glenn Harrold - the UK's best-selling self-help audio author with sales of 3,000,000.<br><br>Insomnia and other sleep problems are often caused by stress, anxiety and a busy mind at bedtime. Glenn's highly acclaimed hypnotherapy techniques and audio production will help you overcome these problems in a completely safe and natural way.</p>";
      } else if (pickedbook=="hs2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>How to Sleep Well: The Science of Sleeping Smarter, Living Better and Being Productive</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Neil Stanley <br>Narrator: BJ Harrison</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>It has never been more important to sleep well.<br><br>Stop sabotaging your own sleep and finally wake up energized and refreshed.<br><br>How to Sleep Well is a guidebook that can change your sleep and help you live your life more fully. Whether you struggle to fall asleep, sleep too lightly, wake too often, or simply cannot wake up, this book can help you get on track to sleeping well and living better. It all starts with the science of sleep: how much you really need, what your body does during sleep, and the causes behind many common sleep problems. Next, you'll identify the things in your life that are disrupting your sleep cycle and learn how to mitigate the impact; whether it's the pressure of the workplace or that you simply cannot quiet your own mind, these expert tips and tricks will help you get the sleep you need.</p>";
      } else if (pickedbook=="hs3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Wisdom of Sundays</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Oprah Winfrey <br>Narrator: Oprah Winfrey</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Wisdom of Sundays features insightful selections from the most meaningful conversations between Oprah Winfrey and some of today's most admired thought leaders.<br><br>This program features interviews with Michael Bernard Beckwith, Jon Kabat-Zinn, Caroline Myss, Daniel Pink, Michael Singer, Bryan Stevenson, Eckhart Tolle, Iyanla Vanzant, Elie Wiesel & Gary Zukav. Chapter Introductions are read by Oprah Winfrey.<br><br>Visionaries like Gary Zukav and John Kabat-Zinn share their lessons in finding purpose through intention and mindfulness. World-renowned teachers like Eckhart Tolle and Michael Singer explain our complex relationship with the ego and the healing powers of love and connection; and award-winning and bestselling writers like Bryan Stevenson and Caroline Myss explore the beauty of forgiveness and spirituality.</p>";
      } else if (pickedbook=="hs4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Game of Desire</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Shannon Boodram <br>Narrator: Shannon Boodram</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Women: gain control and confidence in your love lives and find the relationship you want with this modern, life-changing guide from the certified sex educator, intimacy expert, and YouTube personality.<br><br>For younger generations, dating is a complicated mystery. Apps like Tinder and Bumble are supposed to foster connection, but instead serve as a reminder of how painfully single we are.<br><br>Certified sexologist and intimacy coach Shan Boodram— the most sought-after sex educator on the internet— is about to change all that. In this essential how-to guide, she addresses the realities of life today— when the rules of love and attraction are fluid— and teaches a group of young women how to become master daters in just sixty days.</p>";
      } else if (pickedbook=="hs5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Courage to Be Disliked: How to Free Yourself, Change Your Life, and Achieve Real Happiness</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Ichiro Kishimi, Fumitake Koga<br>Narrator: Graeme Malcolm, January LaVoy, Noah Galvin</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Life-Changing Magic of Tidying Up for the mind, The Courage to Be Disliked is the Japanese phenomenon that shows you how to free yourself from the shackles of past experiences and others’ expectations to achieve real happiness.<br><br>The Courage to Be Disliked, already an enormous bestseller in Asia with more than 3.5 million copies sold, demonstrates how to unlock the power within yourself to be the person you truly want to be.<br><br>Using the theories of Alfred Adler, one of the three giants of twentieth century psychology, this book follows an illuminating conversation between a philosopher and a young man.</p>";
      } else if (pickedbook=="r1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Me Before You</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Jojo Moyes <br>Narrator: Steven Crossley, Andrew Wincott</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Lou Clark knows a lot of things. She knows she likes working in The Buttered Bun tea shop, and she might not love her boyfriend Patrick. Will Traynor knows his motorcycle accident took away his desire to live, and now everything feels small and joyless. What Will doesn't know is that Lou is about to burst into his world. And neither of them knows they're going to change the other for all time.</p>";
      } else if (pickedbook=="r2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Stationery Shop of Tehran</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Marjan Kamali <br>Narrator: Mozhan Marno</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>If you read The Little Coffee Shop of Kabul and enjoyed The Beekeeper of Aleppo, you will love The Stationery Shop of Tehran.<br><br>1953, Tehran. In a small shop in a country on the brink of unrest, two people meet for the very first time.<br><br>Roya loves nothing better than to while away the hours in the stationery shop run by Mr Fakhri. The store, stocked with fountain pens, shiny ink bottles, and thick wads of writing paper, also carries translations of literature from all over the world. Bahman, with his burning passion for justice, is like no one else she has ever met.<br><br>But all around them, as their relationship blossoms, life in Tehran is changing.<br><br>Suddenly, shockingly, violence erupts: a coup d'etat that forever changes their country's future, as well as their own.<br><br>Marjan Kamali's beautiful novel explores themes of love and loss, and delivers and unforgettable ending.</p>";
      } else if (pickedbook=="r3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Nightingale</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Kristin Hannah <br>Narrator: Polly Stone</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The New York Times number one bestselling title.<br><br>Bravery, courage, fear and love in a time of war.<br><br>Despite their differences, sisters Viann and Isabelle have always been close. Younger, bolder Isabelle lives in Paris while Viann is content with life in the French countryside with her husband Antoine and their daughter. But when the Second World War strikes, Antoine is sent off to fight and Viann finds herself isolated so Isabelle is sent by their father to help her.<br><br>As the war progresses, the sisters' relationship and strength is tested. With life changing in unbelievably horrific ways, Viann and Isabelle will find themselves facing frightening situations and responding in ways they never thought possible as bravery and resistance take different forms in each of their actions.</p>";
      } else if (pickedbook=="r4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>In Five Years</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Rebecca Serle <br>Narrator: Megan Hilty</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A NEW YORK TIMES BESTSELLER<br><br>Perfect for fans of Me Before You and One Day—a striking, powerful, and moving love story following an ambitious lawyer who experiences an astonishing vision that could change her life forever.<br><br>Where do you see yourself in five years?<br><br>Dannie Kohan lives her life by the numbers.<br><br>She is nothing like her lifelong best friend—the wild, whimsical, believes-in-fate Bella. Her meticulous planning seems to have paid off after she nails the most important job interview of her career and accepts her boyfriend’s marriage proposal in one fell swoop, falling asleep completely content.<br><br>But when she awakens, she’s suddenly in a different apartment, with a different ring on her finger, and beside a very different man. Dannie spends one hour exactly five years in the future before she wakes again in her own home on the brink of midnight—but it is one hour she cannot shake.</p>";
      } else if (pickedbook=="r5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Secret Seaside Escape</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Heidi Swain <br>Narrator: Karen Cass</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Escape to the seaside this summer with the brand new novel from Heidi Swain, the Sunday Times bestselling author of feel-good women’s fiction. Think idyllic beaches, refreshing rock pools and breathtaking romance. The PERFECT summer read!<br><br>Following a shocking revelation within her family, Tess Tyler is looking to escape her hectic city life – and where better to hide than Wynmouth, the seaside town she visited as a child, with its sandy beaches, stunning rock pools and welcoming community. But little does she realise, Wynmouth isn't quite the haven she remembers it to be, and her real life is still threatening to catch up with her…<br><br>Also returning to Wynmouth is Joe. Having fled over a decade ago after an accident that changed his life forever, he’s back and is determined to face his demons.</p>";
      } else if (pickedbook=="h1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Homo Deus: A Brief History of Tomorrow</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Yuval Noah Harari <br>Narrator: Derek Perkins</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Yuval Noah Harari, author of the critically-acclaimed New York Times bestseller and international phenomenon Sapiens, returns with an equally original, compelling, and provocative book, turning his focus toward humanity’s future, and our quest to upgrade humans into gods.<br><br>Over the past century humankind has managed to do the impossible and rein in famine, plague, and war. This may seem hard to accept, but, as Harari explains in his trademark style—thorough, yet riveting—famine, plague and war have been transformed from incomprehensible and uncontrollable forces of nature into manageable challenges. For the first time ever, more people die from eating too much than from eating too little; more people die from old age than from infectious diseases; and more people commit suicide than are killed by soldiers, terrorists and criminals put together.</p>";
      } else if (pickedbook=="h2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Midnight in Chernobyl: The Story of the World's Greatest Nuclear Disaster</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Adam Higginbotham <br>Narrator: Jacques Roy</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Journalist Adam Higginbotham’s definitive, years-in-the-making account of the Chernobyl nuclear power plant disaster—and a powerful investigation into how propaganda, secrecy, and myth have obscured the true story of one of the twentieth century’s greatest disasters.<br><br>Early in the morning of April 26, 1986, Reactor Number Four of the Chernobyl Atomic Energy Station exploded, triggering history’s worst nuclear disaster. In the thirty years since then, Chernobyl has become lodged in the collective nightmares of the world: shorthand for the spectral horrors of radiation poisoning, for a dangerous technology slipping its leash, for ecological fragility, and for what can happen when a dishonest and careless state endangers its citizens and the entire world. But the real story of the accident, clouded from the beginning by secrecy, propaganda, and misinformation, has long remained in dispute.</p>";
      } else if (pickedbook=="h3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Band of Brothers: E Company, 506th Regiment, 101st Airborne, from Normandy to Hitler's Eagle's Nest</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Stephen E. Ambrose <br>Narrator: Tim Jerome</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Stephen E. Ambrose’s classic New York Times bestseller and inspiration for the acclaimed HBO series about Easy Company, the ordinary men who became the World War II’s most extraordinary soldiers at the frontlines of the war's most critical moments. Featuring a foreword from Tom Hanks.<br><br>They came together, citizen soldiers, in the summer of 1942, drawn to Airborne by the $50 monthly bonus and a desire to be better than the other guy. And at its peak—in Holland and the Ardennes—Easy Company was as good a rifle company as any in the world<br><br>From the rigorous training in Georgia in 1942 to the disbanding in 1945, Stephen E. Ambrose tells the story of this remarkable company. In combat, the reward for a job well done is the next tough assignment, and as they advanced through Europe, the men of Easy kept getting the tough assignments.</p>";
      } else if (pickedbook=="h4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Medici: Power, Money, and Ambition in the Italian Renaissance</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Paul Strathern <br>Narrator: Derek Perkins</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A dazzling history of the modest family that rose to become one of the most powerful in Europe, The Medici is a remarkably modern story of power, money, and ambition. Against the background of an age that saw the rebirth of ancient and classical learning Paul Strathern explores the intensely dramatic rise and fall of the Medici family in Florence, as well as the Italian Renaissance which they did so much to sponsor and encourage. Interwoven into the narrative are the lives of many of the great Renaissance artists with whom the Medici had dealings, including Leonardo, Michelangelo, and Donatello, as well as scientists like Galileo and Pico della Mirandola.</p>";
      } else if (pickedbook=="h5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Military Strategy: A Global History</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Jeremy Black <br>Narrator: Matthew Waterson</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A global account of military strategy, which examines the practices, rather than the theories, of the most significant military figures of the past 400 years.<br><br>Strategy has existed as long as there has been organized conflict. In this new account, Jeremy Black explores the ever-changing relationship between purpose, force, implementation, and effectiveness in military strategy and its dramatic impact on the development of the global power system.<br><br>Taking a 'total' view of strategy, Black looks at leading powers-notably the United States, China, Britain, and Russia-in the wider context of their competition and their domestic and international strengths. Ranging from France's Ancien Regime and Britain's empire building to present day conflicts in the Middle East, Black devotes particular attention to the strategic practice and decisions of the Kangxi Emperor, Clausewitz, Napoleon, and Hitler.</p>";
      } else if (pickedbook=="pd1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Mark Manson <br>Narrator: Roger Wayne</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>#1 New York Times Bestseller<br><br>In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people.<br><br>For decades, we’ve been told that positive thinking is the key to a happy, rich life. 'F**k positivity,' Mark Manson says. 'Let’s be honest, shit is f**ked and we have to live with it.' In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected modern society and spoiled a generation, rewarding them with gold medals just for showing up. </p>";
      } else if (pickedbook=="pd2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The 48 Laws of Power</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Robert Greene <br>Narrator: Don Leslie</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Cunning, instructive, and amoral, this controversial bestseller distills 3,000 years of the history of power into 48 well-explicated laws.<br><br>Law 1: Never Outshine the Master.<br><br>Law 3: Conceal Your Intentions.<br><br>Law 7: Get Others to Do the Work for You, but Always Take the Credit.<br><br>Law 15: Crush Your Enemy Totally.<br><br>Law 33: Discover Each Man's Thumbscrew.<br><br>These are the laws of power in their unvarnished essence–the philosophies of Machiavelli (The Prince), Sun-tzu (The Art of War), Carl von Clausewitz, Talleyrand, the great seducer Casanova, con man Yellow Kid Weil, and other legendary thinkers and schemers. They teach prudence, stealth, mastery of one's emotions, the art of deception, and the total absence of mercy. Like it or not, all have practical applications in real life. </p>";
      } else if (pickedbook=="pd3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Secret</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Rhonda Byrne <br>Narrator: Rhonda Byrne</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Now includes exclusive behind-the-scenes content about the making of the film The Secret: Dare to Dream starring Katie Holmes and John Lucas.<br><br>In 2006, a groundbreaking feature-length film revealed the great mystery of the universe—The Secret—and, later that year, Rhonda Byrne followed with a book that became a worldwide bestseller.<br><br>Fragments of a Great Secret have been found in the oral traditions, in literature, in religions, and philosophies throughout the centuries. For the first time, all the pieces of The Secret come together in an incredible revelation that will be life-transforming for all who experience it.<br><br>In this book, you’ll learn how to use The Secret in every aspect of your life—money, health, relationships, happiness, and in every interaction you have in the world.</p>";
      } else if (pickedbook=="pd4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Power of Self-Confidence: Become Unstoppable, Irresistible, and Unafraid in Every Area of Your Life</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Brian Tracy <br>Narrator: Brian Tracy </p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Why are some people more successful than others? Self-confidence!<br><br>What one great goal would you set if you knew you could not fail? What wonderful things would you want to do with your life if you were guaranteed success in anything you attempted?<br><br>Your level of self-confidence determines the size of the goals you set, the energy and determination that you focus on achieving them, and the amount of persistence you apply to overcoming every obstacle. In this powerful, practical audiobook based on work with more than 5 million executives, entrepreneurs, sales professionals, and ambitious people in more than sixty countries, you learn how to develop unshakable self-confidence in every area of your life.<br><br>The Power of Self-Confidence explains how to increase your 'mental fitness' by thinking like top performers in every field. </p>";
      } else if (pickedbook=="pd5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Summary of Atomic Habits by James Clear</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Best Self Audio<br>Narrator: Best Self Audio</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Learn how you can apply the main lessons & principles from Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones in a quick, easy listen!<br><br>Have you been wanting to change your habits but keep failing? Maybe you cannot stick to new routines, even though you really want to? The problem could just be the way you are incorporating these new habits into your existing daily routine.<br><br></p>";
      } else if (pickedbook=="fs1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Norse Mythology</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Neil Gaiman <br>Narrator: Neil Gaiman</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Introducing an instant classic--master storyteller Neil Gaiman presents a dazzling version of the great Norse myths.<br><br>Neil Gaiman has long been inspired by ancient mythology in creating the fantastical realms of his fiction. Now he turns his attention back to the source, presenting a bravura rendition of the great northern tales. In Norse Mythology, Gaiman fashions primeval stories into a novelistic arc that begins with the genesis of the legendary nine worlds; delves into the exploits of the deities, dwarves, and giants; and culminates in Ragnarok, the twilight of the gods and the rebirth of a new time and people. Gaiman stays true to the myths while vividly reincarnating Odin, the highest of the high, wise, daring, and cunning; Thor, Odin’s son, incredibly strong yet not the wisest of gods; and Loki, the son of a giant, a trickster and unsurpassable manipulator.</p>";
      } else if (pickedbook=="fs2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Core</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Peter V. Brett <br>Narrator: Colin Mace</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Sunday Times and New York Times bestselling author Peter V. Brett brings one of the most imaginative fantasy sagas of the twenty-first century to an epic close.<br><br>The war has begun…<br><br>For time out of mind, bloodthirsty demons have stalked the night, culling the human race to scattered remnants dependent on half-forgotten magics to protect them.<br><br>Two heroes arose—men as close as brothers, yet divided by bitter betrayal. Arlen Bales became known as the Painted Man, tattooed head-to-toe with powerful magic symbols that enable him to fight demons in hand-to-hand combat—and emerge victorious. Ahmann Jardir, armed with magically warded weapons, called himself the Deliverer, a figure prophesied to unite humanity and lead them to triumph in Sharak Ka—the final war against demonkind.</p>";
      } else if (pickedbook=="fs3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Two Towers</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: J.R.R. Tolkien <br>Narrator: Rob Inglis</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Building on the story begun in The Hobbit and The Fellowship of the Ring, this is the second part of Tolkien’s epic masterpiece, The Lord of the Rings.<br><br>Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in the battle with an evil spirit in the Mines of Moria; and at the Falls of Rauros, Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape the rest of the company were attacked by Orcs.<br><br>Now they continue their journey alone down the great River Anduin – alone, that is, save for the mysterious creeping figure that follows wherever they go.</p>";
      } else if (pickedbook=="fs4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>One More Last Time</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Eric Ugland <br>Narrator: Neil Hellegers</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A ruined life. A broken heart.<br><br>He thought it was the end, and his gun sat ready to make sure.<br><br>But an oddball offer from his last friend comes at the literal last second. Curiosity gets the best of him, and he finds himself sucked into iNcarn8, a game claiming to be a whole new life. Now as Montana, the larger-than-life tank warrior, he has one more last time to get his life right.</p>";
      } else if (pickedbook=="fs5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Realm Between- Two Brothers</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Phoenix Grey <br>Narrator: Neil Hellegers</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Welcome to the second installment in the Realm Between series by Phoenix Grey.<br><br>Will Galvan is no longer a noob to The Realm. In fact, he's no longer Will Galvan. Emerged as Azure and still undecided about his class, the new hero is ready to face the cause of the curse on Crescent Island head-on. Little does he know that in-game decisions may have real-world consequences, up to and including death.<br><br>But more importantly than all of that, the mystery of Uden is revealed. Is he a good guy? A bad guy? A good guy who just happens to also be an a-hole? Keep listening to find out!<br><br>Adventure awaits in this mix of dungeon crawler and slice-of-life LitRPG.</p>";
      } else if (pickedbook=="f1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Lifespan: Why We Age – and Why We Don’t Have To</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: David A. Sinclair<br>Narrator: David A. Sinclair</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>In this paradigm-shifting book from acclaimed Harvard Medical School doctor and one of TIME magazine’s 100 most influential people on earth, Dr. David Sinclair reveals that everything we think we know about ageing is wrong, and shares the surprising, scientifically-proven methods that can help readers live younger, longer.<br><br>For decades, the medical community has looked to a variety of reasons for why we age, and the consensus is that no one dies of old age; they die of age-related diseases. That's because ageing is not a disease – it is inevitable.<br><br>But what if everything you think you know about ageing is wrong?<br><br>What if ageing is a disease? And that disease is curable.<br><br>In THE EVOLUTION OF AGEING, Dr. David Sinclair, one of the world’s foremost authorities on genetics and ageing, argues just that.In this book, he reveals a bold new theory of ageing, one that pinpoints a root cause of ageing. </p>";
      } else if (pickedbook=="f2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Tangled Tree</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: David Quammen <br>Narrator: Jacques Roy</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Longlisted for the National Book Award for Nonfiction and A New York Times Notable Book of 2018.<br><br>Our understanding of the ‘tree of life’, with powerful implications for human genetics, human health and our own human nature, has recently completely changed.<br><br>This book is about a new method of telling the story of life on earth – through molecular phylogenetics. It involves a fairly simple method – the reading of the deep history of life by looking at the variation in protein molecules found in living organisms. For instance, we now know that roughly eight per cent of the human genome arrived not through traditional inheritance from directly ancestral forms, but sideways by viral infection.</p>";
      } else if (pickedbook=="f3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The World According to Physics</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Jim Al-Khalili <br>Narrator: Jim Al-Khalili </p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>This audiobook narrated by quantum physicist, New York Times bestselling author, and BBC host Jim Al-Khalili offers an illuminating look at what physics reveals about the world.<br><br>Shining a light on the most profound insights revealed by modern physics, Jim Al-Khalili invites us all to understand what this crucially important science tells us about the universe and the nature of reality itself.<br><br>Al-Khalili begins by introducing the fundamental concepts of space, time, energy, and matter, and then describes the three pillars of modern physics—quantum theory, relativity, and thermodynamics—showing how all three must come together if we are ever to have a full understanding of reality. </p>";
      } else if (pickedbook=="f4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Universe in Your Hand: A Journey Through Space, Time and Beyond</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Christophe Galfard <br>Narrator: Leighton Pugh</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Imagine if The Hitchhiker's Guide to the Galaxy were a real, practical book about the mysteries of the universe...<br><br>The Universe in Your Hand takes us on a wonder-filled journey to the surface of our dying sun, shrinks us to the size of an atom and puts us in the deathly grip of distant black holes. Along the way you might come to understand, really understand, the mind-bending science that underpins modern life, from quantum mechanics to Einstein's theory of general relativity.<br><br>Through brilliant storytelling and humour rather than graphs and equations, internationally renowned astrophysicist Christophe Galfard has written an instant classic that brings the astonishing beauty of the universe to life – and takes us deep into questions about the beginning of time and the future of humanity.</p>";
      } else if (pickedbook=="f5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Problems With Philosophy</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Bertrand Russell <br>Narrator: James Langton</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Problems of Philosophy' discusses Bertrand Russell's views on philosophy and the problems that arise in the field. Russell's views focus on knowledge rather than the metaphysical realm of philosophy. 'The Problems with Philosophy' revolves around the central question that Russell asks in his opening line of Chapter 1 - Is there any knowledge in the world which is so certain that no reasonable man could doubt it? He examines this question by delving into the idea of reality versus appearance, as for Russell and other philosophers who share his ideas it is sensory perception of the world around them that shapes their knowledge. It is in this work that he discusses his idea of sense-data to help explain the differences between appearance and reality. 'The Problems of Philosophy' is Russell's first attempt at recording and working through a theory of epistemology, which is the theory of the nature of human knowledge.</p>";
      } else if (pickedbook=="c1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>To Kill a Mockingbird</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Harper Lee <br>Narrator: Sissy Spacek</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Voted America's Best-Loved Novel in PBS's The Great American Read.<br><br>Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred.<br><br>One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.</p>";
      } else if (pickedbook=="c2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Great Gatsby</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: F. Scott Fitzgerald <br>Narrator: Martin Reyto</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Generally considered to be F. Scott Fitzgerald's finest novel, The Great Gatsby is a consummate summary of the 'roaring twenties', and a devastating expose of the 'Jazz Age'. Through the narration of Nick Carraway, the reader is taken into the superficially glittering world of the mansions which lined the Long Island shore in the 1920s, to encounter Nick's cousin Daisy, her brash but wealthy husband Tom Buchanan, Jay Gatsby and the mystery that surrounds him.</p>";
      } else if (pickedbook=="c3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Midwinter Murder: Fireside Mysteries from the Queen of Crime</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Agatha Christie<br>Narrator: Fenella Woolgar</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>An all-new collection of winter-themed mysteries from the master of the genre, just in time for the festive period.<br><br>There's a chill in the air and the days are growing shorter… It's the perfect time to curl up in front of a crackling fireplace with this winter-themed collection from legendary mystery writer Agatha Christie. But beware of deadly snowdrifts and dangerous gifts, poisoned meals and mysterious guests. This compendium of short stories, some featuring beloved detectives Hercule Poirot and Miss Marple, is an essential omnibus for Christie fans and the perfect gift for mystery lovers.</p>";
      } else if (pickedbook=="c4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Robinson Crusoe</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Daniel Defoe <br>Narrator: Gordon Griffin</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Robinson Crusoe is the classic tale about one man's lust for adventure. Crusoe leaves his parents and hometown for the open sea in the year 1651. But the ocean can be unforgiving and Crusoe, unfortunately, learns this the hard way. Through a series of wild events he ends up shipwrecked on a shore in South America, being forced to salvage what he can in order to survive. Overcoming his despair, Crusoe begins a new life on this island searching for meaning and eventually finding redemption. This tale of adventure into the unknown during a time of exploration will find listeners on the edge of their seat as Crusoe encounters multiple shipwrecks, pirates, and even cannibals on his wild journey.</p>";
      } else if (pickedbook=="c5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Wuthering Heights</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Emily Brontë <br>Narrator: Ruth Golding</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Emily Brontë's Wuthering Heights has been called the most beautiful, most profoundly violent love story of all time. This is the story of the all-encompassing and passionate, yet thwarted, love between Heathcliff and Catherine Earnshaw. The story concludes by showing how this unresolved love eventually destroys both lovers and many around them. This story is considered a classic in the English literature.</p>";
      } else if (pickedbook=="b1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>This is Going to Hurt: Secret Diaries of a Junior Doctor</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Adam Kay<br>Narrator: Adam Kay </p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The multi-million copy bestseller.<br>Book of the Year at The National Book Awards.<br><br>Welcome to the life of a junior doctor: 97-hour weeks, life and death decisions, a constant tsunami of bodily fluids, and the hospital parking meter earns more than you.<br><br>Scribbled in secret after endless days, sleepless nights and missed weekends, Adam Kay's This is Going to Hurt provides a no-holds-barred account of his time on the NHS front line. Hilarious, horrifying and heartbreaking, this diary is everything you wanted to know – and more than a few things you didn't – about life on and off the hospital ward.<br><br>Sunday Times Number One Bestseller for over eight months and winner of a record FOUR National Book Awards: Book of the Year, Non-Fiction Book of the Year, New Writer of the Year and Zoe Ball Book Club Book of the Year.</p>";
      } else if (pickedbook=="b2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Permanent Record</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Edward Snowden <br>Narrator: Holter Graham</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>THE SUNDAY TIMES TOP TEN BESTSELLER<br><br>Edward Snowden, the man who risked everything to expose the US government’s system of mass surveillance, reveals for the first time the story of his life, including how he helped to build that system and what motivated him to try to bring it down.<br><br>In 2013, twenty-nine-year-old Edward Snowden shocked the world when he broke with the American intelligence establishment and revealed that the United States government was secretly pursuing the means to collect every single phone call, text message, and email. The result would be an unprecedented system of mass surveillance with the ability to pry into the private lives of every person on earth. Six years later, Snowden reveals for the very first time how he helped to build this system and why he was moved to expose it.</p>";
      } else if (pickedbook=="b3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Outlaw Platoon</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: John Bruning, Sean Parnell<br>Narrator: Ray Porter</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A riveting story of American fighting men, Outlaw Platoon is Lieutenant Sean Parnell’s stunning personal account of the legendary U.S. Army’s 10th Mountain Division’s heroic stand in the mountains of Afghanistan.<br><br>Acclaimed for its vivid, poignant, and honest recreation of sixteen brutal months of nearly continuous battle in the deadly Hindu Kesh, Outlaw Platoon is a Band of Brothers or We Were Soldiers Once and Young for the early 21st century—an action-packed, highly emotional true story of enormous sacrifice and bravery.<br><br>A magnificent account of heroes, renegades, infidels, and brothers, it stands with Sebastian Junger’s War as one of the most important books to yet emerge from the heat, smoke, and fire of America’s War in Afghanistan.</p>";
      } else if (pickedbook=="b4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Ashlee Vance <br>Narrator: Fred Sanders</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley’s most exciting, unpredictable, and ambitious entrepreneurs—a real-life Tony Stark—and a fascinating exploration of the renewal of American invention and its new “makers.”<br><br>Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius’s life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.</p>";
      } else if (pickedbook=="b5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Shoe Dog: A Memoir by the Creator of Nike</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Phil Knight <br>Narrator: Norbert Leo Butz</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>In this instant and tenacious New York Times bestseller, Nike founder and board chairman Phil Knight “offers a rare and revealing look at the notoriously media-shy man behind the swoosh” (Booklist, starred review), illuminating his company’s early days as an intrepid start-up and its evolution into one of the world’s most iconic, game-changing, and profitable brands.<br><br>Fresh out of business school, Phil Knight borrowed fifty dollars from his father and launched a company with one simple mission: import high-quality, low-cost running shoes from Japan. Selling the shoes from the trunk of his car in 1963, Knight grossed eight thousand dollars that first year. Today, Nike’s annual sales top $30 billion. In this age of start-ups, Knight’s Nike is the gold standard, and its swoosh is one of the few icons instantly recognized in every corner of the world.</p>";
      } else if (pickedbook=="e1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Never Split the Difference: Negotiating As If Your Life Depended On It</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Chris Voss, Tahl Raz<br>Narrator: Michael Kramer</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home.<br><br>After a stint policing the rough streets of Kansas City, Missouri, Chris Voss joined the FBI, where his career as a hostage negotiator brought him face-to-face with a range of criminals, including bank robbers and terrorists. Reaching the pinnacle of his profession, he became the FBI’s lead international kidnapping negotiator. Never Split the Difference takes you inside the world of high-stakes negotiations and into Voss’s head, revealing the skills that helped him and his colleagues succeed where it mattered most: saving lives. In this practical guide, he shares the nine effective principles—counterintuitive tactics and strategies—you too can use to become more persuasive in both your professional and personal life.</p>";
      } else if (pickedbook=="e2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Getting to Yes: How to Negotiate Agreement Without Giving In</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Roger Fisher, William Ury<br>Narrator: Dennis Boutsikaris</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Getting to Yes offers a concise, step-by-step, proven strategy for coming to mutually acceptable agreements in every sort of conflict—whether it involves parents and children, neighbors, bosses and employees, customers or corporations, tenants or diplomats. Based on the work of the Harvard Negotiation Project, a group that deals continually with all levels of negotiation and conflict resolution from domestic to business to international, Getting to Yes tells listeners how to: <br><br>• Separate the people from the problem<br><br>• Focus on interests, not positions<br><br>• Work together to create options that will satisfy both parties<br><br>• Negotiate successfully with people who are more powerful, refuse to play by the rules, or resort to “dirty tricks”</p>";
      } else if (pickedbook=="e3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>HBR's 10 Must Reads on Negotiation</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Daniel Kahneman, Deepak Malhotra <br>Narrator: Chloe Cannon, Brian Holden</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Learn to be a better negotiator-and achieve the outcomes you want.<br><br>We've combed through hundreds of Harvard Business Review articles and selected the most important ones to help you avoid common mistakes, find hidden opportunities, and win the best deals possible.<br><br>This book will inspire you to: control the negotiation before you enter the room; persuade others to do what you want-for their own reasons; manage emotions on both sides of the table; understand the rules of negotiating across cultures; set the stage for a healthy relationship long after the ink has dried; and identify what you can live with and when to walk away.</p>";
      } else if (pickedbook=="e4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Flawless Consulting: A Guide to Getting Your Expertise Used, Third Edition</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Peter Block <br>Narrator: Erik Synnestvedt</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>When the landmark best-seller Flawless Consulting was first published more than three decades ago, it was quickly adopted as the 'consultant's bible.' With his legendary warmth and passion, Peter Block explained how to deal effectively with clients, peers, and others. The book continues to speak to people in a support function inside organizations as well as to external consultants.<br><br>This thoroughly revised and updated third edition of Peter Block's groundbreaking book explores the latest thinking on consultation. It includes new insights about how we can organize our consulting around discovering the strengths, positive examples, and gifts of the client organization or community. The book remains a practical and specific guide for anyone who needs to develop a capacity for deeper relatedness and partnership-which means it is for all who wish to make a real difference in the world.</p>";
      } else if (pickedbook=="e5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>What to Do When You're New: How to Be Comfortable, Confident, and Successful in New Situations</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Keith Rollag <br>Narrator: Walter Dixon</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Success starts with a simple act: doing something new. It can be starting a new job or school, or moving to a new neighborhood. It can be meeting a prospective client or attending a networking event. To achieve anything in life, you have to put yourself out there, meet new people, and try new things. But sometimes we freeze. Awkwardness, worry, and reluctance keep us stuck in our boxes. If we learn to conquer these natural anxieties, we can confidently seize life's opportunities.<br><br>In What to Do When You're New, Keith Rollag distills the work of leading scientists and his own original research into a groundbreaking formula for success. You'll learn not only why we feel so uneasy in new situations, but what you can do to become a more comfortable and effective newcomer. With practice, anyone can get better at being new.</p>";
      } else if (pickedbook=="ya1.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>The Hunger Games</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Suzanne Collins <br>Narrator: Tatiana Maslany</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Emmy Award-winning actress Tatiana Maslany narrates a brand-new special edition recording of the first audiobook in the worldwide bestselling trilogy from Suzanne Collins!<br><br>In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.<br><br>Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to death before-and survival, for her, is second nature. Still, if she is to win, she will have to start making choices that weigh survival against humanity and life against love.</p>";
      } else if (pickedbook=="ya2.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Divergent</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Veronica Roth <br>Narrator: Emma Galvin</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Discover or return to the dystopian series that's captured the hearts of millions of teen and adult readers! This first in Veronica Roth's #1 New York Times bestselling Divergent series of books is the novel the inspired the major motion picture starring Shailene Woodley, Theo James, and Kate Winslet.<br><br>Perfect for fans of the Hunger Games and Maze Runner series, Divergent and its sequels, Insurgent and Allegiant, are the gripping story of a dystopian world transformed by courage, self-sacrifice, and love. Fans of the Divergent movie will find the book packed with just as much emotional depth and exhilarating action as the film, all told in beautiful, rich language.<br><br>One choice can transform you. Beatrice Prior's society is divided into five factions—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent).</p>";
      } else if (pickedbook=="ya3.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>With the Fire on High</h4>";
        document.getElementById("title2").innerHTML = "<p>Author:  <br>Narrator: </p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>2020 Audie Awards® WINNER - Narration by Author<br><br>2020 Audie Awards® Finalist - Young Adult <br><br>From the New York Times bestselling author of the National Book Award-winning title The Poet X comes a dazzling novel in prose about a girl with talent, pride, and a drive to feed the soul that keeps her fire burning bright.<br><br>Ever since she got pregnant freshman year, Emoni Santiago’s life has been about making the tough decisions—doing what has to be done for her daughter and her abuela. The one place she can let all that go is in the kitchen, where she adds a little something magical to everything she cooks, turning her food into straight-up goodness.<br><br>Even though she dreams of working as a chef after she graduates, Emoni knows that it’s not worth her time to pursue the impossible.Yet despite the rules she thinks she has to play by, once Emoni starts cooking, her only choice is to let her talent break free.</p>";
      } else if (pickedbook=="ya4.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Far from the Tree</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Robin Benway <br>Narrator: Julia Whelan</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>National Book Award Winner, PEN America Award Winner, and New York Times Bestseller!<br><br>Being the middle child has its ups and downs.<br><br>But for Grace, an only child who was adopted at birth, discovering that she is a middle child is a different ride altogether. After putting her own baby up for adoption, she goes looking for her biological family, including — Maya, her loudmouthed younger bio sister, who has a lot to say about their newfound family ties. Having grown up the snarky brunette in a house full of chipper redheads, she’s quick to search for traces of herself among these not-quite-strangers. And when her adopted family’s long-buried problems begin to explode to the surface, Maya can’t help but wonder where exactly it is that she belongs.<br><br>And Joaquin, their stoic older bio brother, who has no interest in bonding over their shared biological mother.</p>";
      } else if (pickedbook=="ya5.jpg") {
        $("#pickedbookimg").attr("src",pickedbook);
        document.getElementById("title1").innerHTML = "<h4>Imagine Me</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Tahereh Mafi <br>Narrator: Vikas Adam, Kate Simses</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The explosive finale to the New York Times and USA Today bestselling Shatter Me series.<br><br>Juliette Ferrars. Ella Sommers. Which is the truth and which is the lie?<br><br>Now that Ella knows who Juliette is and what she was created for, things have only become more complicated. As she struggles to understand the past that haunts her and looks to a future more uncertain than ever, the lines between right and wrong—between Ella and Juliette—blur. And with old enemies looming, her destiny may not be her own to control.<br><br>The day of reckoning for the Reestablishment is coming. But she may not get to choose what side she fights on.</p>";
      }




    }
  }


if(localStorage) {
	$(document).ready(function() {
		    $(".bookcover").click(function() {
            // window.thebook = $('img').context.currentSrc
            // window.thebook = $(this).attr('src');
            window.thebook = $(this).attr('id');
            window.localStorage.setItem('thebook', thebook);
            window.location.href="bookinfo.html";
    });
  });
}


  function showbookinfo() {
    var pickedbook = localStorage.getItem('thebook');
    if (typeof(Storage) !== "undefined") {

      if (pickedbook=="harryp") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>Harry Potter and the Chamber of Secrets</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: J.K. Rowling <br>Narrator: Stephen Fry</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>There is a plot, Harry Potter. A plot to make most terrible things happen at Hogwarts School of Witchcraft and Wizardry this year. Harry Potter's summer has included the worst birthday ever, doomy warnings from a house-elf called Dobby, and rescue from the Dursleys by his friend Ron Weasley in a magical flying car! Back at Hogwarts School of Witchcraft and Wizardry for his second year, Harry hears strange whispers echo through empty corridors - and then the attacks start. Students are found as though turned to stone... Dobby's sinister predictions seem to be coming true. </p>";
      }


      else if (pickedbook=="d1") {
          $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Feral Detective </h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Jonathan Lethem <br>Narrator: Zosia Mamet</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>“One of America’s greatest storytellers.” —Washington Post<br><br>Phoebe Siegler first meets Charles Heist in a shabby trailer on the eastern edge of Los Angeles. She’s looking for her friend’s missing daughter, Arabella, and hires Heist to help. A laconic loner who keeps his pet opossum in a desk drawer, Heist intrigues the sarcastic and garrulous Phoebe. Reluctantly, he agrees to help. The unlikely pair navigate the enclaves of desert-dwelling vagabonds and find that Arabella is in serious trouble—caught in the middle of a violent standoff that only Heist, mysteriously, can end. Phoebe’s trip to the desert was always going to be strange, but it was never supposed to be dangerous...<br><br>Jonathan Lethem’s first detective novel since Motherless Brooklyn, The Feral Detective is a singular achievement by one of our greatest writers. </p>";
          } else if (pickedbook=="d2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Shutter Island</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Dennis Lehane <br>Narrator: Tom Stechschulte</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The basis for the blockbuster motion picture directed by Martin Scorsese and starring Leonardo DiCaprio, Shutter Island by New York Times bestselling author Dennis Lehane is a gripping and atmospheric psychological thriller where nothing is quite what it seems. The New York Times calls Shutter Island, “Startlingly original.” The Washington Post raves, “Brilliantly conceived and executed.” A masterwork of suspense and surprise from the author of Mystic River and Gone, Baby, Gone, Shutter Island carries the reader into a nightmare world of madness, mind control, and CIA Cold War paranoia and is unlike anything you’ve ever read before. </p>";
          } else if (pickedbook=="d3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Rule of Fear</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Luke Delaney  <br>Narrator: Paul Panting</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The new novel by Luke Delaney, ex-Met detective and author of the terrifyingly authentic DI Sean Corrigan series. Perfect for fans of Mark Billingham, Peter James and Stuart MacBride.<br><br>Tasked with cleaning up the notorious Grove Wood Estate, Sergeant Jack King is determined to rise to the challenge. But it’s not just drug dealers and petty thugs his team have to worry about. Someone is preying on children and they need to hunt down the culprit, fast.<br><br>Soon King finds himself in over his head: the local residents won’t play ball, and he’s refusing to admit that he’s suffering from PTSD. As the pressures combine, the line between right and wrong starts to blur and King finds himself in a downward spiral. Only he can save himself – but is it already too late?</p>";
          } else if (pickedbook=="d4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Last Man Standing</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: David Baldacci <br>Narrator: Jason Culp</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Seven seconds. That's all it took for Web London to lose everything: his friends, his team, his reputation. Point man of the FBI's super-elite Hostage Rescue Team, Web roared into a blind alley towards a drug leader's lair, only to meet a high-tech, custom-designed ambush that killed everyone around him.<br><br>Coping with the blame-filled words of anguished widows and the suspicions of colleagues, Web tries to put his life back together. To do so, he must discover why he was the one man who lived through the ambush – and find the only other person who came out of the alley alive . . . a ten-year-old boy who has since disappeared. Acting on his instincts, Web believes he knows where the killer will strike next. Only this time, he may not survive the attack.</p>";
          } else if (pickedbook=="d5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Two Minute Rule</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Robert Crais <br>Narrator: Christopher Graybill</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Two minutes can be a lifetime. But break the two minute rule and it's a lifetime in jail. Ask anyone on the wrong side of the law about the two minute rule and they'll tell you that's as long as you can hope for at a robbery before the cops show up.<br><br>But not everyone plays by the rules. When an ageing ex-con finally gets out of jail, freedom doesn't taste too sweet. His son is gunned down in a drive-by shooting. It seems like a random crime, but when the victim is a cop - especially a cop with a con for a father - the motives are never simple.</p>";
          } else if (pickedbook=="q1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Social Media Marketing 2019: Secret Strategies to Become an Influencer of Millions.</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Dave Welch <br>Narrator: K Michael Prince</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Social media is a superb and energizing world, and seeing each of the devices accessible will give you the confidence to build deals or set up an individual relationship with your clients. <br><br> There are many things that you can do to market yourself online. However, you need to do it in a smart way without leaving any penny without a proper return on investment. The book “Social Media Marketing 2019” will help you start growing more followers today and help you automate the process! </p>";
          } else if (pickedbook=="q2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Get Smart: How to Think and Act Like the Most Successful and Highest-Paid People in Every Field</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Brian Tracy  <br>Narrator: Brian Tracy </p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>An accessible guide on training the brain to work effortlessly in your favor-from the international bestselling author of the productivity classic Eat That Frog <br><br> In business and in life, you must be smart to get ahead. As things shift and change quickly, you need to tap into your brain-learn how to think smartly-in order to make sure that you maximize your opportunities. <br><br>In Get Smart!, internationally-acclaimed business guru, speaker, author, and productivity expert Brian Tracy has laid the groundwork on how to easily reconfigure your negative thinking patterns and habits, and reprogram your brain to achieve its maximum potential. In this invaluable book, readers will encounter: <br><br>· The latest brain research on how to think, in order to get results <br>· Practical, easy-to-understand advice and immediately actionable steps and exercises.</p>";
          } else if (pickedbook=="q3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Black Salwar</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Sadat Hasan Manto <br>Narrator: Vanita Mascarenhas</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Sultana, a small town prostitute, migrates to the city with dreams in her eyes. With time however she goes about her tactical ways of seducing people, she always seems to miss her targets. Her business starts going down and her loneliness gets intensely objectified in her desire for the 'Black Salwar' that she needs to complete her ensemble for Muharram.<br><br>This has been translated from the original story 'Kali Salwar' written by Saadat Hasan Manto. Saadat Hasan Manto was the most widely read and the most controversial short-story writer. He was known to write about the hard truths of society that no one dared to talk about. </p>";
          } else if (pickedbook=="q4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Adventures of Huckleberry Finn</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Mark Twain <br>Narrator: Annie Coleman Rothenberg</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Huckleberry Finn is a wonderful story filled with adventure and unforgettable characters that no one who has read it will ever forget. The book is noted for its colorful description of people and places along the Mississippi River. Set in a Southern antebellum society that had ceased to exist about twenty years before the work was published, Adventures of Huckleberry Finn is an often scathing satire on entrenched attitudes, particularly racism. </p>";
          } else if (pickedbook=="q5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>They Both Die at the End</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Adam Silvera <br>Narrator: Bahni Turpin, Michael Crouch</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>From the bestselling author of HISTORY IS ALL YOU LEFT ME comes another unforgettable story of life, loss and making each day count.<br><br>On September 5th, a little after midnight, Death-Cast calls Mateo Torrez and Rufus Emeterio to give them some bad news: they're going to die today. Mateo and Rufus are total strangers, but, for different reasons, they're both looking to make a new friend on their End Day. The good news: there's an app for that. It's called the Last Friend, and through it, Rufus and Mateo are about to meet up for one last great adventure - to live a lifetime in a single day. <br><br>Another beautiful, heartbreaking and life-affirming book from the brilliant Adam Silvera, author of History Is All You Left Me. </p>";
          } else if (pickedbook=="tc1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Iceman</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Anthony Bruno <br>Narrator: Bronson Pinchot</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>At home, Richard Kuklinski was a dedicated suburban family man; on the street, he was the Iceman, a professional hit man and lethal scam artist, a man so heartless he kept one of his victims frozen for over two years to disguise the time of death. His personal body count was over one hundred, but the police couldn’t touch him. Then undercover agent Dominick Polifrone posed as a mobster and began a deadly game of cat and mouse. <br><br>The Iceman chronicles Kuklinski’s grisly career and exposes his murderous double life.</p>";
          } else if (pickedbook=="tc2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>I'll Be Gone in the Dark: One Woman's Obsessive Search for the Golden State Killer</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Michelle McNamara  <br>Narrator: Gillian Flynn, Gabra Zackman</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Winner of the Goodreads Choice Awards for Nonfiction | Anthony Award Winner | SCIBA Book Award Winner | Finalist for the Edgar Award for Best Fact Crime | Longlisted for the Carnegie Medal for Excellence.<br><br>The haunting true story of the elusive serial rapist turned murderer who terrorized California during the 70s and 80s, and of the gifted journalist who died tragically while investigating the case—which was solved in April 2018.<br><br>The haunting true story of the elusive serial rapist turned murderer who terrorized California for over a decade—and of the gifted journalist who died tragically while investigating the case.<br><br>Introduction by Gillian Flynn • Afterword by Patton Oswalt“A brilliant genre-buster.... Propulsive, can’t-stop-now reading.” —Stephen King</p>";
          } else if (pickedbook=="tc3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Bad Blood: Secrets and Lies in a Silicon Valley Startup</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: John Carreyrou  <br>Narrator: Will Damron</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>'I couldn’t put down this thriller … the perfect book to read by the fire this winter.' Bill Gates, '5 books I loved in 2018'<br><br>WINNER OF THE FINANCIAL TIMES/MCKINSEY BUSINESS BOOK OF THE YEAR AWARD 2018<br><br>The full inside story of the breathtaking rise and shocking collapse of Theranos, the multibillion-dollar biotech startup, by the prize-winning journalist who first broke the story and pursued it to the end, despite pressure from its charismatic CEO and threats by her lawyers.<br><br></p>";
          } else if (pickedbook=="tc4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Killer Across the Table: Unlocking the Secrets of Serial Killers and Predators with the FBI's Original Mindhunter</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: John E. Douglas, Mark Olshaker <br>Narrator: Jonathan Groff</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Performed by Jonathan Groff, star of the hit Netflix show Mindhunter, and featuring an exclusive conversation between John E. Douglas and Jonathan Groff at the end of the audiobook.<br><br>In The Killer Across the Table, John E. Douglas, the legendary FBI criminal profiler, number-one New York Times bestselling author, and inspiration for Netflix’s Mindhunter delves deep into the lives and crimes of four of the most disturbing and complex predatory killers, offering never-before-revealed details about his profiling process, and divulging the strategies used to help crack some of America’s most challenging cases. The Killer Across the Table is narrated by Jonathan Groff, who plays Holden Ford on Mindhunter, the character inspired by John E. Douglas.</p>";
          } else if (pickedbook=="tc5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>I Survived: I married a charming man. Then he tried to kill me. A true story.</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Victoria Cilliers  <br>Narrator: Sophie Roberts</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A chilling, eye-opening story of marriage and attempted murder, revealing the truth about a case that made headlines around the world.<br><br>On Easter Sunday 2015, experienced skydiver Victoria Cilliers undertook a parachute jump, a gift from her husband, British army sergeant Emile Cilliers. Her parachutes failed to open and she plummeted 4,000 feet to the ground, sustaining life-threatening injuries. Miraculously, she survived. Then the police arrived at her door. Someone had tampered with her parachute and they suspected Emile.<br><br>In I Survived Victoria describes how she fell for Emile, and how the charming man she thought she knew gradually revealed a darker side, chipping away at her self-worth until she found it impossible to sift truth from lies. Can she really believe that her husband – the father of their two young children – tried to kill her?</p>";
          } else if (pickedbook=="n1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Keeper of Lost Things</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Ruth Hogan <br>Narrator: Jane Collingwood, Sandra Duncan</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A charming, clever, and quietly moving debut novel of of endless possibilities and joyful discoveries that explores the promises we make and break, losing and finding ourselves, the objects that hold magic and meaning for our lives, and the surprising connections that bind us.<br><br>Anthony Peardew is the keeper of lost things. Forty years ago, he carelessly lost a keepsake from his beloved fiancée, Therese. That very same day, she died unexpectedly. Brokenhearted, Anthony sought consolation in rescuing lost objects—the things others have dropped, misplaced, or accidently left behind—and writing stories about them. Now, in the twilight of his life, Anthony worries that he has not fully discharged his duty to reconcile all the lost things with their owners.</p>";
          } else if (pickedbook=="n2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Mermaid and Mrs. Hancock</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Imogen Hermes Gowar  <br>Narrator: Juliet Stevenson</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>In 1780s London, a prosperous merchant finds his quiet life upended when he unexpectedly receives a most unusual creature—and meets a most extraordinary woman—in this much-lauded, atmospheric debut that examines our capacity for wonder, obsession, and desire with all the magnetism, originality, and literary magic of The Essex Serpent.<br><br>One September evening in 1785, Jonah Hancock hears an urgent knocking on his front door near the docks of London. The captain of one of Jonah’s trading vessels is waiting eagerly on the front step, bearing shocking news. On a voyage to the Far East, he sold the Jonah’s ship for something rare and far more precious: a mermaid. Jonah is stunned—the object the captain presents him is brown and wizened, as small as an infant, with vicious teeth and claws, and a torso that ends in the tail of a fish. It is also dead.</p>";
          } else if (pickedbook=="n3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Conjure Women</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Afia Atakora <br>Narrator: Adenrele Ojo</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>You’re free to decide your future. But how do you escape the ghosts of the past?<br><br>The pale-skinned, black-eyed baby is a bad omen. That’s one thing the people on the old plantation are sure of. The other is that Miss Rue – midwife, healer, crafter of curses – will know what to do.<br><br>But for once Rue doesn’t know. Times have changed since her mother Miss May Belle held the power to influence the life and death of her fellow slaves. Freedom has come. The master’s Big House lies in ruins. But this new world brings new dangers, and Rue’s old magic may be no match for them.<br><br>When sickness sweeps across her tight-knit community, Rue finds herself the focus of suspicion. What secrets does she keep amidst the charred remains of the Big House? Which spells has she conjured to threaten their children? And why is she so wary of the charismatic preacher man who promises to save them all?</p>";
          } else if (pickedbook=="n4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>A Single Thread</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Tracy Chevalier <br>Narrator: Fenella Woolgar</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>FROM THE GLOBALLY BESTSELLING AUTHOR OF GIRL WITH A PEARL EARRING<br><br>The First World War took everything from her. Her brother, her fiancé – and her future. She is now considered a ‘surplus woman’.<br><br>But Violet is also fiercely independent and determined. Escaping her suffocating mother, she moves to Winchester to start a new life –a change that will require courage, resilience and acts of quiet rebellion. And when whispers of another world war surface, she must live with a secret that could change everything…</p>";
          } else if (pickedbook=="n5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Best Kept Secret</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Jeffrey Archer <br>Narrator: Alex Jennings</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>1945. The vote in the House of Lords as to who should inherit the Barrington family fortune has ended in a tie. The Lord Chancellor's deciding vote will cast a long shadow on the lives of Harry Clifton and Giles Barrington.<br><br>Harry returns to America to promote his latest novel, while his beloved Emma goes in search of the little girl who was found abandoned in her father's office on the night he was killed.<br><br>When the General Election is called, Giles Barrington has to defend his seat in the House of Commons and is horrified to discover who the Conservatives select to stand against him. But it is Sebastian Clifton, Harry and Emma's son, who ultimately influences his uncle's fate.</p>";
          } else if (pickedbook=="p1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Faraja Nyalandu on the technological revolution</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Reach for Change <br>Narrator: Sofia Breitholtz, Faraja Nyalandu</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The Reach for Change podcast is a collaboration between Reach for Change and Storytel where entrepreneurs, investors, activists and philanthropists give their analyzes and future trendwatch on how we accelerate the speed to reach a more green and socially sustainable world over the next ten years.<br><br>In the tenth episode you will meet Faraja Nyalandu, the Tanzanian lawyer who changed her career path and became a social entrepreneur to help empower young people through innovative digital educational programmes. Faraja tells us about going against the odds, leaving a stable career to pursue a strong idea, wanting to create a better world for children and young people.</p>";
          } else if (pickedbook=="p2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Story - too good to be true</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: John Bernstein, Arto Koskinen <br>Narrator: Trent Pancy</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>When Arto Koskinen made the documentary film about Heinrich Himmler’s physical therapist and healer in the late 1990s, a warning light went off right away for the filmmakers. Or were the bad omens just due to an overactive imagination?<br><br>Historian Antti Matikkala reveals the reasons for the honorary titles bestowed on Felix Kersten, and the film’s producer Jan Wellmann reminisces how it all started.</p>";
          } else if (pickedbook=="p3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Good Morning Nantwich Podcast</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Phill Jupitus <br>Narrator: Phill Jupitus </p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Chapter 9 of Good Morning Nantwich. We’re not happy t’ill you’re not happy is the ninth chapter which Phill reads as an exclusive podcast. This bonus material is available for free online to download on the 5th August 2010.<br><br>‘We’re not happy t’ill you’re not happy’ is the ninth chapter of the book, which Phill reads as an exclusive podcast. This bonus material is available for free online to download now.<br><br>A very amusing recording of one of the chapters that was edited out when the abridgement of Good Morning Nantwich was taking place. This download contains Phill joking, ad-libbing, commenting on page turning and fluffing his lines. A charming piece of audio.</p>";
          } else if (pickedbook=="p4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Per Heggenes on philanthropy</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Reach for Change <br>Narrator: Sofia Breitholtz, Per Heggenes</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The Reach for Change podcast is a collaboration between Reach for Change and Storytel where entrepreneurs, investors, activists and philanthropists give their analyzes and future trendwatch on how we accelerate the speed to reach a more green and socially sustainable world over the next ten years.<br><br>In the fifth episode you will meet Per Heggenes, the CEO of the IKEA Foundation, a philanthropy which is funded by INGKA Foundation, owner of Ingka Group, who own most of the IKEA stores worldwide. IKEA Foundation is spending 200 million euros per year to help people who live in vulnerable conditions. Since becoming the Foundation’s first CEO in 2009, Per has led the Foundation’s evolution into a global, grant-making philanthropy that funds programs in more than 45 countries.</p>";
          } else if (pickedbook=="p5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Dox Podcast - Mattias Göransson</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Annika Seward Jensen <br>Narrator: Annika Seward Jensen</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Mattias Göransson, founder and editor-in-chief of Filter magazine. When Sifo asked 42,000 people to rank Sweden's best magazine, Filter was placed in shared first place with the football magazine Offside, where Mattias is also one of the founders. Here he tells about his role models and why storytelling is the best way to convey facts, states what a nice confirmation it was when Aftonbladet's reporter dissed him for not better managing one of the football world's biggest scoop and says to inject the stories directly into the blood.<br><br>Storytel Dox is a podcast for those who are curious about journalists and journalism, who appreciate storytelling and want to hear the stories behind the report. Publisher Annika Seward Jensen talks to a guest who is relevant in connection with Storytel Dox's publication of reports, articles and interviews such as audio books</p>";
          } else if (pickedbook=="t1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Savage Son: A Thriller</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Jack Carr <br>Narrator: Ray Porter</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>INSTANT NEW YORK TIMES BESTSELLER<br><br>In this third high-octane thriller in the “seriously good” (Lee Child, #1 New York Times bestselling author) Terminal List series, former Navy SEAL James Reece must infiltrate the Russian mafia and turn the hunters into the hunted.<br><br>Deep in the wilds of Siberia, a woman is on the run, pursued by a man harboring secrets—a man intent on killing her.<br><br>A traitorous CIA officer has found refuge with the Russian mafia with designs on ensuring a certain former Navy SEAL sniper is put in the ground.<br><br>Half a world away, James Reece is recovering from brain surgery in the Montana wilderness, slowly putting his life back together with the help of investigative journalist Katie Buranek and his longtime friend and SEAL teammate Raife Hastings. Unbeknownst to them, the Russian mafia has set their sights on Reece in a deadly game of cat and mouse.<br><br></p>";
          } else if (pickedbook=="t2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>A Nearly Normal Family</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Mattias Edvardsson <br>Narrator: Richard Armitage, Emily Watson</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Chosen as one of the best seven thrillers of the summer by the New York Times<br><br>A Nearly Normal Family is the stunning psychological thriller from M. T. Edvardsson and asks what would you do if your child was suspected of murder, how far would you go to protect them? Do you want to know the truth? If you loved A. J. Finn’s The Woman in the Window or J. P. Delaney’s The Girl Before, you will love this.<br><br>Every murder case starts with a suspect. What if the suspect is your daughter? Would you believe her, or the evidence against her?</p>";
          } else if (pickedbook=="t3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Dead to Her</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Sarah Pinborough  <br>Narrator: Saskia Maarleveld</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>For fans of Liane Moriarty, Liv Constantine and Lisa Jewell, a twisty psychological thriller about a savvy second wife who will do almost anything to come out on top from the New York Times bestselling author of Behind Her Eyes.<br><br>Being the second wife can be murder...<br><br>'Once a cheat, always a cheat,' they say. Marcie Maddox has worked hard to get where she is after the illicit affair that started her new life a few years ago. But her world of country clubs, yachts and sumptuous houses in Savannah, Georgia, isn’t easy to maintain, no matter how hard she tries. Nor is keeping her husband, Jason, truly interested.<br><br>So, when Jason’s boss brings home a hot new wife from his trip to London, the young Mrs William Radford IV isn’t quite the souvenir everyone expected. Sexy, drop-dead gorgeous and black—Keisha quickly usurps Marcie’s place as the beautiful second wife. </p>";
          } else if (pickedbook=="t4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Wives</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Tarryn Fisher <br>Narrator: Lauren Fortgang</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>New York Times bestselling author Tarryn Fisher delivers a pulse–pounding, fast–paced suspense novel that will leave you breathless. A thriller you won’t be able to put down!<br><br>Thursday’s husband, Seth, has two other wives. She’s never met them, and she doesn’t know anything about them. She agreed to this unusual arrangement because she’s so crazy about him.<br><br>But one day, she finds something. Something that tells a very different—and horrifying—story about the man she married.<br><br>What follows is one of the most twisted, shocking thrillers you’ll ever read.</p>";
          } else if (pickedbook=="t5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Give Me Your Hand</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Megan Abbott <br>Narrator: Chloe Cannon</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>'Megan Abbott at her very best. Cool, crisp, chilling.' Paula Hawkins, author of The Girl on the Train<br><br>You told each other everything. Then she told you too much.<br><br>Kit has risen to the top of her profession and is on the brink of achieving everything she wanted. She hasn’t let anything stop her.<br><br>But now someone else is standing in her way – Diane. Best friends at seventeen, their shared ambition made them inseparable. Until the day Diane told Kit her secret – the worst thing she’d ever done, the worst thing Kit could imagine – and it blew their friendship apart.<br><br>Kit is still the only person who knows what Diane did. And now Diane knows something about Kit that could destroy everything she’s worked so hard for.</p>";
          } else if (pickedbook=="k1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Paddington Goes To Town</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Michael Bond <br>Narrator: Hugh Bonneville</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Original adventures of the classic bear from Darkest Peru, soon to be a major movie star!<br><br>Paddington doesn’t intentionally turn his friend’s wedding into an uproar by getting the wedding ring stuck on his paw. Nor does he mean Mr Curry to slip on his marmalade sandwich in the middle of an important gold shot. But these sort of things just happen to a bear like Paddington!<br><br>Paddington Bear has touched the hearts of adults and children worldwide with his earnest good intentions and humorous misadventures for more than fifty years.</p>";
          } else if (pickedbook=="k2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Pete the Cat: Go, Pete, Go!</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: James Dean <br>Narrator: James Fouhey</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>New York Times bestselling author-artist James Dean brings us a new Pete the Cat adventure, a special reimagining of “The Tortoise and the Hare” as a race between Pete and Turtle, in Pete the Cat: Go, Pete, Go!<br><br>Ding, ding. There’s nothing Pete the Cat loves to do more on a sunny day than ring his little bell and pedal fast on his bicycle. But on this sunny day, Turtle wants to race someone in his new car. Vroom, vroom! Pete and his bicycle are up for the challenge!<br><br>And when Pete crosses the finish line, he proves it’s not where you’re going that matters, it’s how groovy of a time you have getting there!</p>";
          } else if (pickedbook=="k3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Who’ll save Alfie Atkins?</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Gunilla Bergström <br>Narrator: Alan Pryke</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Alfie has just moved. He doesn’t know anyone here. He has to settle for Malcolm – his invisible friend who always does exactly what Alfie wants. But Malcolm never comes when the big boys chase him or soak his jacket with their water pistols. He’s never there then.</p>";
          } else if (pickedbook=="k4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Pages & Co.: Tilly and the Map of Stories</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Anna James <br>Narrator: Aysha Kala</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Third in the modern-classic and bestselling bookwandering series that celebrates all that is best in life: books, adventure, friendship – and cake.<br><br>Strange things are happening. A man comes into Pages & Co looking for a book… then suddenly can’t remember it. Tilly and her family feel like the world is changing – but can’t quite put their finger on why.<br><br>Meanwhile, the Underwoods are expanding their control over bookwandering – and they still have their sights set on Tilly. Leaving the safety of the bookshop, Tilly heads to America to find the legendary Archivists and save bookwandering…<br><br>… or at least, that’s the plan. Wandering in layers of story, Tilly and her friend Oskar come up against dangers they could never have expected, team up with an unexpectedly familiar face, and ultimately find themselves taking on the biggest threat to stories there has ever been.</p>";
          } else if (pickedbook=="k5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Pages & Co.: Tilly and the Bookwanderers</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Anna James <br>Narrator: Aysha Kala</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A magical adventure to delight the imagination. A curl-up-on-the-sofa snuggle of a debut from a uniquely talented author. Eleven year-old Tilly has lived above her grandparents’ bookshop ever since her mother disappeared shortly after she was born. Like the rest of her family, Tilly loves nothing more than to escape into the pages of her favourite stories.<br><br>One day Tilly realises that classic children’s characters are appearing in the shop through the magic of ‘book walking’ – crossing over from the page into real life.<br><br>With the help of Anne of Green Gables and Alice in Wonderland. Tilly is determined to solve the mystery of what happened to her mother all those years ago, so she bravely steps into the unknown, unsure of what adventure lies ahead and what dangers she may face.</p>";
          } else if (pickedbook=="hs1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Deep Sleep Every Night</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Glenn Harrold <br>Narrator: Glenn Harrold</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Join the thousands of people who have overcome their sleep disorders and insomnia by using this superb, high quality hypnosis MP3 by Glenn Harrold - the UK's best-selling self-help audio author with sales of 3,000,000.<br><br>Insomnia and other sleep problems are often caused by stress, anxiety and a busy mind at bedtime. Glenn's highly acclaimed hypnotherapy techniques and audio production will help you overcome these problems in a completely safe and natural way.</p>";
          } else if (pickedbook=="hs2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>How to Sleep Well: The Science of Sleeping Smarter, Living Better and Being Productive</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Neil Stanley <br>Narrator: BJ Harrison</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>It has never been more important to sleep well.<br><br>Stop sabotaging your own sleep and finally wake up energized and refreshed.<br><br>How to Sleep Well is a guidebook that can change your sleep and help you live your life more fully. Whether you struggle to fall asleep, sleep too lightly, wake too often, or simply cannot wake up, this book can help you get on track to sleeping well and living better. It all starts with the science of sleep: how much you really need, what your body does during sleep, and the causes behind many common sleep problems. Next, you'll identify the things in your life that are disrupting your sleep cycle and learn how to mitigate the impact; whether it's the pressure of the workplace or that you simply cannot quiet your own mind, these expert tips and tricks will help you get the sleep you need.</p>";
          } else if (pickedbook=="hs3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Wisdom of Sundays</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Oprah Winfrey <br>Narrator: Oprah Winfrey</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The Wisdom of Sundays features insightful selections from the most meaningful conversations between Oprah Winfrey and some of today's most admired thought leaders.<br><br>This program features interviews with Michael Bernard Beckwith, Jon Kabat-Zinn, Caroline Myss, Daniel Pink, Michael Singer, Bryan Stevenson, Eckhart Tolle, Iyanla Vanzant, Elie Wiesel & Gary Zukav. Chapter Introductions are read by Oprah Winfrey.<br><br>Visionaries like Gary Zukav and John Kabat-Zinn share their lessons in finding purpose through intention and mindfulness. World-renowned teachers like Eckhart Tolle and Michael Singer explain our complex relationship with the ego and the healing powers of love and connection; and award-winning and bestselling writers like Bryan Stevenson and Caroline Myss explore the beauty of forgiveness and spirituality.</p>";
          } else if (pickedbook=="hs4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Game of Desire</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Shannon Boodram <br>Narrator: Shannon Boodram</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Women: gain control and confidence in your love lives and find the relationship you want with this modern, life-changing guide from the certified sex educator, intimacy expert, and YouTube personality.<br><br>For younger generations, dating is a complicated mystery. Apps like Tinder and Bumble are supposed to foster connection, but instead serve as a reminder of how painfully single we are.<br><br>Certified sexologist and intimacy coach Shan Boodram— the most sought-after sex educator on the internet— is about to change all that. In this essential how-to guide, she addresses the realities of life today— when the rules of love and attraction are fluid— and teaches a group of young women how to become master daters in just sixty days.</p>";
          } else if (pickedbook=="hs5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Courage to Be Disliked: How to Free Yourself, Change Your Life, and Achieve Real Happiness</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Ichiro Kishimi, Fumitake Koga<br>Narrator: Graeme Malcolm, January LaVoy, Noah Galvin</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The Life-Changing Magic of Tidying Up for the mind, The Courage to Be Disliked is the Japanese phenomenon that shows you how to free yourself from the shackles of past experiences and others’ expectations to achieve real happiness.<br><br>The Courage to Be Disliked, already an enormous bestseller in Asia with more than 3.5 million copies sold, demonstrates how to unlock the power within yourself to be the person you truly want to be.<br><br>Using the theories of Alfred Adler, one of the three giants of twentieth century psychology, this book follows an illuminating conversation between a philosopher and a young man.</p>";
          } else if (pickedbook=="r1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Me Before You</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Jojo Moyes <br>Narrator: Steven Crossley, Andrew Wincott</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Lou Clark knows a lot of things. She knows she likes working in The Buttered Bun tea shop, and she might not love her boyfriend Patrick. Will Traynor knows his motorcycle accident took away his desire to live, and now everything feels small and joyless. What Will doesn't know is that Lou is about to burst into his world. And neither of them knows they're going to change the other for all time.</p>";
          } else if (pickedbook=="r2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Stationery Shop of Tehran</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Marjan Kamali <br>Narrator: Mozhan Marno</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>If you read The Little Coffee Shop of Kabul and enjoyed The Beekeeper of Aleppo, you will love The Stationery Shop of Tehran.<br><br>1953, Tehran. In a small shop in a country on the brink of unrest, two people meet for the very first time.<br><br>Roya loves nothing better than to while away the hours in the stationery shop run by Mr Fakhri. The store, stocked with fountain pens, shiny ink bottles, and thick wads of writing paper, also carries translations of literature from all over the world. Bahman, with his burning passion for justice, is like no one else she has ever met.<br><br>But all around them, as their relationship blossoms, life in Tehran is changing.<br><br>Suddenly, shockingly, violence erupts: a coup d'etat that forever changes their country's future, as well as their own.<br><br>Marjan Kamali's beautiful novel explores themes of love and loss, and delivers and unforgettable ending.</p>";
          } else if (pickedbook=="r3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Nightingale</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Kristin Hannah <br>Narrator: Polly Stone</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The New York Times number one bestselling title.<br><br>Bravery, courage, fear and love in a time of war.<br><br>Despite their differences, sisters Viann and Isabelle have always been close. Younger, bolder Isabelle lives in Paris while Viann is content with life in the French countryside with her husband Antoine and their daughter. But when the Second World War strikes, Antoine is sent off to fight and Viann finds herself isolated so Isabelle is sent by their father to help her.<br><br>As the war progresses, the sisters' relationship and strength is tested. With life changing in unbelievably horrific ways, Viann and Isabelle will find themselves facing frightening situations and responding in ways they never thought possible as bravery and resistance take different forms in each of their actions.</p>";
          } else if (pickedbook=="r4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>In Five Years</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Rebecca Serle <br>Narrator: Megan Hilty</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A NEW YORK TIMES BESTSELLER<br><br>Perfect for fans of Me Before You and One Day—a striking, powerful, and moving love story following an ambitious lawyer who experiences an astonishing vision that could change her life forever.<br><br>Where do you see yourself in five years?<br><br>Dannie Kohan lives her life by the numbers.<br><br>She is nothing like her lifelong best friend—the wild, whimsical, believes-in-fate Bella. Her meticulous planning seems to have paid off after she nails the most important job interview of her career and accepts her boyfriend’s marriage proposal in one fell swoop, falling asleep completely content.<br><br>But when she awakens, she’s suddenly in a different apartment, with a different ring on her finger, and beside a very different man. Dannie spends one hour exactly five years in the future before she wakes again in her own home on the brink of midnight—but it is one hour she cannot shake.</p>";
          } else if (pickedbook=="r5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Secret Seaside Escape</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Heidi Swain <br>Narrator: Karen Cass</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Escape to the seaside this summer with the brand new novel from Heidi Swain, the Sunday Times bestselling author of feel-good women’s fiction. Think idyllic beaches, refreshing rock pools and breathtaking romance. The PERFECT summer read!<br><br>Following a shocking revelation within her family, Tess Tyler is looking to escape her hectic city life – and where better to hide than Wynmouth, the seaside town she visited as a child, with its sandy beaches, stunning rock pools and welcoming community. But little does she realise, Wynmouth isn't quite the haven she remembers it to be, and her real life is still threatening to catch up with her…<br><br>Also returning to Wynmouth is Joe. Having fled over a decade ago after an accident that changed his life forever, he’s back and is determined to face his demons.</p>";
          } else if (pickedbook=="h1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Homo Deus: A Brief History of Tomorrow</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Yuval Noah Harari <br>Narrator: Derek Perkins</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Yuval Noah Harari, author of the critically-acclaimed New York Times bestseller and international phenomenon Sapiens, returns with an equally original, compelling, and provocative book, turning his focus toward humanity’s future, and our quest to upgrade humans into gods.<br><br>Over the past century humankind has managed to do the impossible and rein in famine, plague, and war. This may seem hard to accept, but, as Harari explains in his trademark style—thorough, yet riveting—famine, plague and war have been transformed from incomprehensible and uncontrollable forces of nature into manageable challenges. For the first time ever, more people die from eating too much than from eating too little; more people die from old age than from infectious diseases; and more people commit suicide than are killed by soldiers, terrorists and criminals put together.</p>";
          } else if (pickedbook=="h2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Midnight in Chernobyl: The Story of the World's Greatest Nuclear Disaster</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Adam Higginbotham <br>Narrator: Jacques Roy</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Journalist Adam Higginbotham’s definitive, years-in-the-making account of the Chernobyl nuclear power plant disaster—and a powerful investigation into how propaganda, secrecy, and myth have obscured the true story of one of the twentieth century’s greatest disasters.<br><br>Early in the morning of April 26, 1986, Reactor Number Four of the Chernobyl Atomic Energy Station exploded, triggering history’s worst nuclear disaster. In the thirty years since then, Chernobyl has become lodged in the collective nightmares of the world: shorthand for the spectral horrors of radiation poisoning, for a dangerous technology slipping its leash, for ecological fragility, and for what can happen when a dishonest and careless state endangers its citizens and the entire world. But the real story of the accident, clouded from the beginning by secrecy, propaganda, and misinformation, has long remained in dispute.</p>";
          } else if (pickedbook=="h3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Band of Brothers: E Company, 506th Regiment, 101st Airborne, from Normandy to Hitler's Eagle's Nest</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Stephen E. Ambrose <br>Narrator: Tim Jerome</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Stephen E. Ambrose’s classic New York Times bestseller and inspiration for the acclaimed HBO series about Easy Company, the ordinary men who became the World War II’s most extraordinary soldiers at the frontlines of the war's most critical moments. Featuring a foreword from Tom Hanks.<br><br>They came together, citizen soldiers, in the summer of 1942, drawn to Airborne by the $50 monthly bonus and a desire to be better than the other guy. And at its peak—in Holland and the Ardennes—Easy Company was as good a rifle company as any in the world<br><br>From the rigorous training in Georgia in 1942 to the disbanding in 1945, Stephen E. Ambrose tells the story of this remarkable company. In combat, the reward for a job well done is the next tough assignment, and as they advanced through Europe, the men of Easy kept getting the tough assignments.</p>";
          } else if (pickedbook=="h4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Medici: Power, Money, and Ambition in the Italian Renaissance</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Paul Strathern <br>Narrator: Derek Perkins</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A dazzling history of the modest family that rose to become one of the most powerful in Europe, The Medici is a remarkably modern story of power, money, and ambition. Against the background of an age that saw the rebirth of ancient and classical learning Paul Strathern explores the intensely dramatic rise and fall of the Medici family in Florence, as well as the Italian Renaissance which they did so much to sponsor and encourage. Interwoven into the narrative are the lives of many of the great Renaissance artists with whom the Medici had dealings, including Leonardo, Michelangelo, and Donatello, as well as scientists like Galileo and Pico della Mirandola.</p>";
          } else if (pickedbook=="h5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Military Strategy: A Global History</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Jeremy Black <br>Narrator: Matthew Waterson</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A global account of military strategy, which examines the practices, rather than the theories, of the most significant military figures of the past 400 years.<br><br>Strategy has existed as long as there has been organized conflict. In this new account, Jeremy Black explores the ever-changing relationship between purpose, force, implementation, and effectiveness in military strategy and its dramatic impact on the development of the global power system.<br><br>Taking a 'total' view of strategy, Black looks at leading powers-notably the United States, China, Britain, and Russia-in the wider context of their competition and their domestic and international strengths. Ranging from France's Ancien Regime and Britain's empire building to present day conflicts in the Middle East, Black devotes particular attention to the strategic practice and decisions of the Kangxi Emperor, Clausewitz, Napoleon, and Hitler.</p>";
          } else if (pickedbook=="pd1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Mark Manson <br>Narrator: Roger Wayne</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>#1 New York Times Bestseller<br><br>In this generation-defining self-help guide, a superstar blogger cuts through the crap to show us how to stop trying to be 'positive' all the time so that we can truly become better, happier people.<br><br>For decades, we’ve been told that positive thinking is the key to a happy, rich life. 'F**k positivity,' Mark Manson says. 'Let’s be honest, shit is f**ked and we have to live with it.' In his wildly popular Internet blog, Manson doesn’t sugarcoat or equivocate. He tells it like it is—a dose of raw, refreshing, honest truth that is sorely lacking today. The Subtle Art of Not Giving a F**k is his antidote to the coddling, let’s-all-feel-good mindset that has infected modern society and spoiled a generation, rewarding them with gold medals just for showing up. </p>";
          } else if (pickedbook=="pd2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The 48 Laws of Power</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Robert Greene <br>Narrator: Don Leslie</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Cunning, instructive, and amoral, this controversial bestseller distills 3,000 years of the history of power into 48 well-explicated laws.<br><br>Law 1: Never Outshine the Master.<br><br>Law 3: Conceal Your Intentions.<br><br>Law 7: Get Others to Do the Work for You, but Always Take the Credit.<br><br>Law 15: Crush Your Enemy Totally.<br><br>Law 33: Discover Each Man's Thumbscrew.<br><br>These are the laws of power in their unvarnished essence–the philosophies of Machiavelli (The Prince), Sun-tzu (The Art of War), Carl von Clausewitz, Talleyrand, the great seducer Casanova, con man Yellow Kid Weil, and other legendary thinkers and schemers. They teach prudence, stealth, mastery of one's emotions, the art of deception, and the total absence of mercy. Like it or not, all have practical applications in real life. </p>";
          } else if (pickedbook=="pd3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Secret</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Rhonda Byrne <br>Narrator: Rhonda Byrne</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Now includes exclusive behind-the-scenes content about the making of the film The Secret: Dare to Dream starring Katie Holmes and John Lucas.<br><br>In 2006, a groundbreaking feature-length film revealed the great mystery of the universe—The Secret—and, later that year, Rhonda Byrne followed with a book that became a worldwide bestseller.<br><br>Fragments of a Great Secret have been found in the oral traditions, in literature, in religions, and philosophies throughout the centuries. For the first time, all the pieces of The Secret come together in an incredible revelation that will be life-transforming for all who experience it.<br><br>In this book, you’ll learn how to use The Secret in every aspect of your life—money, health, relationships, happiness, and in every interaction you have in the world.</p>";
          } else if (pickedbook=="pd4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Power of Self-Confidence: Become Unstoppable, Irresistible, and Unafraid in Every Area of Your Life</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Brian Tracy <br>Narrator: Brian Tracy </p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Why are some people more successful than others? Self-confidence!<br><br>What one great goal would you set if you knew you could not fail? What wonderful things would you want to do with your life if you were guaranteed success in anything you attempted?<br><br>Your level of self-confidence determines the size of the goals you set, the energy and determination that you focus on achieving them, and the amount of persistence you apply to overcoming every obstacle. In this powerful, practical audiobook based on work with more than 5 million executives, entrepreneurs, sales professionals, and ambitious people in more than sixty countries, you learn how to develop unshakable self-confidence in every area of your life.<br><br>The Power of Self-Confidence explains how to increase your 'mental fitness' by thinking like top performers in every field. </p>";
          } else if (pickedbook=="pd5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Summary of Atomic Habits by James Clear</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Best Self Audio<br>Narrator: Best Self Audio</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Learn how you can apply the main lessons & principles from Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones in a quick, easy listen!<br><br>Have you been wanting to change your habits but keep failing? Maybe you cannot stick to new routines, even though you really want to? The problem could just be the way you are incorporating these new habits into your existing daily routine.<br><br></p>";
          } else if (pickedbook=="fs1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Norse Mythology</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Neil Gaiman <br>Narrator: Neil Gaiman</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Introducing an instant classic--master storyteller Neil Gaiman presents a dazzling version of the great Norse myths.<br><br>Neil Gaiman has long been inspired by ancient mythology in creating the fantastical realms of his fiction. Now he turns his attention back to the source, presenting a bravura rendition of the great northern tales. In Norse Mythology, Gaiman fashions primeval stories into a novelistic arc that begins with the genesis of the legendary nine worlds; delves into the exploits of the deities, dwarves, and giants; and culminates in Ragnarok, the twilight of the gods and the rebirth of a new time and people. Gaiman stays true to the myths while vividly reincarnating Odin, the highest of the high, wise, daring, and cunning; Thor, Odin’s son, incredibly strong yet not the wisest of gods; and Loki, the son of a giant, a trickster and unsurpassable manipulator.</p>";
          } else if (pickedbook=="fs2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Core</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Peter V. Brett <br>Narrator: Colin Mace</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Sunday Times and New York Times bestselling author Peter V. Brett brings one of the most imaginative fantasy sagas of the twenty-first century to an epic close.<br><br>The war has begun…<br><br>For time out of mind, bloodthirsty demons have stalked the night, culling the human race to scattered remnants dependent on half-forgotten magics to protect them.<br><br>Two heroes arose—men as close as brothers, yet divided by bitter betrayal. Arlen Bales became known as the Painted Man, tattooed head-to-toe with powerful magic symbols that enable him to fight demons in hand-to-hand combat—and emerge victorious. Ahmann Jardir, armed with magically warded weapons, called himself the Deliverer, a figure prophesied to unite humanity and lead them to triumph in Sharak Ka—the final war against demonkind.</p>";
          } else if (pickedbook=="fs3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Two Towers</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: J.R.R. Tolkien <br>Narrator: Rob Inglis</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Building on the story begun in The Hobbit and The Fellowship of the Ring, this is the second part of Tolkien’s epic masterpiece, The Lord of the Rings.<br><br>Frodo and the Companions of the Ring have been beset by danger during their quest to prevent the Ruling Ring from falling into the hands of the Dark Lord by destroying it in the Cracks of Doom. They have lost the wizard, Gandalf, in the battle with an evil spirit in the Mines of Moria; and at the Falls of Rauros, Boromir, seduced by the power of the Ring, tried to seize it by force. While Frodo and Sam made their escape the rest of the company were attacked by Orcs.<br><br>Now they continue their journey alone down the great River Anduin – alone, that is, save for the mysterious creeping figure that follows wherever they go.</p>";
          } else if (pickedbook=="fs4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>One More Last Time</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Eric Ugland <br>Narrator: Neil Hellegers</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A ruined life. A broken heart.<br><br>He thought it was the end, and his gun sat ready to make sure.<br><br>But an oddball offer from his last friend comes at the literal last second. Curiosity gets the best of him, and he finds himself sucked into iNcarn8, a game claiming to be a whole new life. Now as Montana, the larger-than-life tank warrior, he has one more last time to get his life right.</p>";
          } else if (pickedbook=="fs5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Realm Between- Two Brothers</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Phoenix Grey <br>Narrator: Neil Hellegers</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Welcome to the second installment in the Realm Between series by Phoenix Grey.<br><br>Will Galvan is no longer a noob to The Realm. In fact, he's no longer Will Galvan. Emerged as Azure and still undecided about his class, the new hero is ready to face the cause of the curse on Crescent Island head-on. Little does he know that in-game decisions may have real-world consequences, up to and including death.<br><br>But more importantly than all of that, the mystery of Uden is revealed. Is he a good guy? A bad guy? A good guy who just happens to also be an a-hole? Keep listening to find out!<br><br>Adventure awaits in this mix of dungeon crawler and slice-of-life LitRPG.</p>";
          } else if (pickedbook=="f1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Lifespan: Why We Age – and Why We Don’t Have To</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: David A. Sinclair<br>Narrator: David A. Sinclair</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>In this paradigm-shifting book from acclaimed Harvard Medical School doctor and one of TIME magazine’s 100 most influential people on earth, Dr. David Sinclair reveals that everything we think we know about ageing is wrong, and shares the surprising, scientifically-proven methods that can help readers live younger, longer.<br><br>For decades, the medical community has looked to a variety of reasons for why we age, and the consensus is that no one dies of old age; they die of age-related diseases. That's because ageing is not a disease – it is inevitable.<br><br>But what if everything you think you know about ageing is wrong?<br><br>What if ageing is a disease? And that disease is curable.<br><br>In THE EVOLUTION OF AGEING, Dr. David Sinclair, one of the world’s foremost authorities on genetics and ageing, argues just that.In this book, he reveals a bold new theory of ageing, one that pinpoints a root cause of ageing. </p>";
          } else if (pickedbook=="f2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Tangled Tree</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: David Quammen <br>Narrator: Jacques Roy</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Longlisted for the National Book Award for Nonfiction and A New York Times Notable Book of 2018.<br><br>Our understanding of the ‘tree of life’, with powerful implications for human genetics, human health and our own human nature, has recently completely changed.<br><br>This book is about a new method of telling the story of life on earth – through molecular phylogenetics. It involves a fairly simple method – the reading of the deep history of life by looking at the variation in protein molecules found in living organisms. For instance, we now know that roughly eight per cent of the human genome arrived not through traditional inheritance from directly ancestral forms, but sideways by viral infection.</p>";
          } else if (pickedbook=="f3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The World According to Physics</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Jim Al-Khalili <br>Narrator: Jim Al-Khalili </p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>This audiobook narrated by quantum physicist, New York Times bestselling author, and BBC host Jim Al-Khalili offers an illuminating look at what physics reveals about the world.<br><br>Shining a light on the most profound insights revealed by modern physics, Jim Al-Khalili invites us all to understand what this crucially important science tells us about the universe and the nature of reality itself.<br><br>Al-Khalili begins by introducing the fundamental concepts of space, time, energy, and matter, and then describes the three pillars of modern physics—quantum theory, relativity, and thermodynamics—showing how all three must come together if we are ever to have a full understanding of reality. </p>";
          } else if (pickedbook=="f4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Universe in Your Hand: A Journey Through Space, Time and Beyond</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Christophe Galfard <br>Narrator: Leighton Pugh</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Imagine if The Hitchhiker's Guide to the Galaxy were a real, practical book about the mysteries of the universe...<br><br>The Universe in Your Hand takes us on a wonder-filled journey to the surface of our dying sun, shrinks us to the size of an atom and puts us in the deathly grip of distant black holes. Along the way you might come to understand, really understand, the mind-bending science that underpins modern life, from quantum mechanics to Einstein's theory of general relativity.<br><br>Through brilliant storytelling and humour rather than graphs and equations, internationally renowned astrophysicist Christophe Galfard has written an instant classic that brings the astonishing beauty of the universe to life – and takes us deep into questions about the beginning of time and the future of humanity.</p>";
          } else if (pickedbook=="f5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Problems With Philosophy</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Bertrand Russell <br>Narrator: James Langton</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The Problems of Philosophy' discusses Bertrand Russell's views on philosophy and the problems that arise in the field. Russell's views focus on knowledge rather than the metaphysical realm of philosophy. 'The Problems with Philosophy' revolves around the central question that Russell asks in his opening line of Chapter 1 - Is there any knowledge in the world which is so certain that no reasonable man could doubt it? He examines this question by delving into the idea of reality versus appearance, as for Russell and other philosophers who share his ideas it is sensory perception of the world around them that shapes their knowledge. It is in this work that he discusses his idea of sense-data to help explain the differences between appearance and reality. 'The Problems of Philosophy' is Russell's first attempt at recording and working through a theory of epistemology, which is the theory of the nature of human knowledge.</p>";
          } else if (pickedbook=="c1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>To Kill a Mockingbird</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Harper Lee <br>Narrator: Sissy Spacek</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Voted America's Best-Loved Novel in PBS's The Great American Read.<br><br>Harper Lee's Pulitzer Prize-winning masterwork of honor and injustice in the deep South—and the heroism of one man in the face of blind and violent hatred.<br><br>One of the most cherished stories of all time, To Kill a Mockingbird has been translated into more than forty languages, sold more than forty million copies worldwide, served as the basis for an enormously popular motion picture, and was voted one of the best novels of the twentieth century by librarians across the country. A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice, it views a world of great beauty and savage inequities through the eyes of a young girl, as her father—a crusading local lawyer—risks everything to defend a black man unjustly accused of a terrible crime.</p>";
          } else if (pickedbook=="c2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Great Gatsby</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: F. Scott Fitzgerald <br>Narrator: Martin Reyto</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Generally considered to be F. Scott Fitzgerald's finest novel, The Great Gatsby is a consummate summary of the 'roaring twenties', and a devastating expose of the 'Jazz Age'. Through the narration of Nick Carraway, the reader is taken into the superficially glittering world of the mansions which lined the Long Island shore in the 1920s, to encounter Nick's cousin Daisy, her brash but wealthy husband Tom Buchanan, Jay Gatsby and the mystery that surrounds him.</p>";
          } else if (pickedbook=="c3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Midwinter Murder: Fireside Mysteries from the Queen of Crime</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Agatha Christie<br>Narrator: Fenella Woolgar</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>An all-new collection of winter-themed mysteries from the master of the genre, just in time for the festive period.<br><br>There's a chill in the air and the days are growing shorter… It's the perfect time to curl up in front of a crackling fireplace with this winter-themed collection from legendary mystery writer Agatha Christie. But beware of deadly snowdrifts and dangerous gifts, poisoned meals and mysterious guests. This compendium of short stories, some featuring beloved detectives Hercule Poirot and Miss Marple, is an essential omnibus for Christie fans and the perfect gift for mystery lovers.</p>";
          } else if (pickedbook=="c4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Robinson Crusoe</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Daniel Defoe <br>Narrator: Gordon Griffin</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Robinson Crusoe is the classic tale about one man's lust for adventure. Crusoe leaves his parents and hometown for the open sea in the year 1651. But the ocean can be unforgiving and Crusoe, unfortunately, learns this the hard way. Through a series of wild events he ends up shipwrecked on a shore in South America, being forced to salvage what he can in order to survive. Overcoming his despair, Crusoe begins a new life on this island searching for meaning and eventually finding redemption. This tale of adventure into the unknown during a time of exploration will find listeners on the edge of their seat as Crusoe encounters multiple shipwrecks, pirates, and even cannibals on his wild journey.</p>";
          } else if (pickedbook=="c5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Wuthering Heights</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Emily Brontë <br>Narrator: Ruth Golding</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Emily Brontë's Wuthering Heights has been called the most beautiful, most profoundly violent love story of all time. This is the story of the all-encompassing and passionate, yet thwarted, love between Heathcliff and Catherine Earnshaw. The story concludes by showing how this unresolved love eventually destroys both lovers and many around them. This story is considered a classic in the English literature.</p>";
          } else if (pickedbook=="b1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>This is Going to Hurt: Secret Diaries of a Junior Doctor</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Adam Kay<br>Narrator: Adam Kay </p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The multi-million copy bestseller.<br>Book of the Year at The National Book Awards.<br><br>Welcome to the life of a junior doctor: 97-hour weeks, life and death decisions, a constant tsunami of bodily fluids, and the hospital parking meter earns more than you.<br><br>Scribbled in secret after endless days, sleepless nights and missed weekends, Adam Kay's This is Going to Hurt provides a no-holds-barred account of his time on the NHS front line. Hilarious, horrifying and heartbreaking, this diary is everything you wanted to know – and more than a few things you didn't – about life on and off the hospital ward.<br><br>Sunday Times Number One Bestseller for over eight months and winner of a record FOUR National Book Awards: Book of the Year, Non-Fiction Book of the Year, New Writer of the Year and Zoe Ball Book Club Book of the Year.</p>";
          } else if (pickedbook=="b2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Permanent Record</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Edward Snowden <br>Narrator: Holter Graham</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>THE SUNDAY TIMES TOP TEN BESTSELLER<br><br>Edward Snowden, the man who risked everything to expose the US government’s system of mass surveillance, reveals for the first time the story of his life, including how he helped to build that system and what motivated him to try to bring it down.<br><br>In 2013, twenty-nine-year-old Edward Snowden shocked the world when he broke with the American intelligence establishment and revealed that the United States government was secretly pursuing the means to collect every single phone call, text message, and email. The result would be an unprecedented system of mass surveillance with the ability to pry into the private lives of every person on earth. Six years later, Snowden reveals for the very first time how he helped to build this system and why he was moved to expose it.</p>";
          } else if (pickedbook=="b3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Outlaw Platoon</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: John Bruning, Sean Parnell<br>Narrator: Ray Porter</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A riveting story of American fighting men, Outlaw Platoon is Lieutenant Sean Parnell’s stunning personal account of the legendary U.S. Army’s 10th Mountain Division’s heroic stand in the mountains of Afghanistan.<br><br>Acclaimed for its vivid, poignant, and honest recreation of sixteen brutal months of nearly continuous battle in the deadly Hindu Kesh, Outlaw Platoon is a Band of Brothers or We Were Soldiers Once and Young for the early 21st century—an action-packed, highly emotional true story of enormous sacrifice and bravery.<br><br>A magnificent account of heroes, renegades, infidels, and brothers, it stands with Sebastian Junger’s War as one of the most important books to yet emerge from the heat, smoke, and fire of America’s War in Afghanistan.</p>";
          } else if (pickedbook=="b4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Ashlee Vance <br>Narrator: Fred Sanders</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>In the spirit of Steve Jobs and Moneyball, Elon Musk is both an illuminating and authorized look at the extraordinary life of one of Silicon Valley’s most exciting, unpredictable, and ambitious entrepreneurs—a real-life Tony Stark—and a fascinating exploration of the renewal of American invention and its new “makers.”<br><br>Elon Musk spotlights the technology and vision of Elon Musk, the renowned entrepreneur and innovator behind SpaceX, Tesla, and SolarCity, who sold one of his Internet companies, PayPal, for $1.5 billion. Ashlee Vance captures the full spectacle and arc of the genius’s life and work, from his tumultuous upbringing in South Africa and flight to the United States to his dramatic technical innovations and entrepreneurial pursuits.</p>";
          } else if (pickedbook=="b5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Shoe Dog: A Memoir by the Creator of Nike</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Phil Knight <br>Narrator: Norbert Leo Butz</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>In this instant and tenacious New York Times bestseller, Nike founder and board chairman Phil Knight “offers a rare and revealing look at the notoriously media-shy man behind the swoosh” (Booklist, starred review), illuminating his company’s early days as an intrepid start-up and its evolution into one of the world’s most iconic, game-changing, and profitable brands.<br><br>Fresh out of business school, Phil Knight borrowed fifty dollars from his father and launched a company with one simple mission: import high-quality, low-cost running shoes from Japan. Selling the shoes from the trunk of his car in 1963, Knight grossed eight thousand dollars that first year. Today, Nike’s annual sales top $30 billion. In this age of start-ups, Knight’s Nike is the gold standard, and its swoosh is one of the few icons instantly recognized in every corner of the world.</p>";
          } else if (pickedbook=="e1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Never Split the Difference: Negotiating As If Your Life Depended On It</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Chris Voss, Tahl Raz<br>Narrator: Michael Kramer</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>A former international hostage negotiator for the FBI offers a new, field-tested approach to high-stakes negotiations—whether in the boardroom or at home.<br><br>After a stint policing the rough streets of Kansas City, Missouri, Chris Voss joined the FBI, where his career as a hostage negotiator brought him face-to-face with a range of criminals, including bank robbers and terrorists. Reaching the pinnacle of his profession, he became the FBI’s lead international kidnapping negotiator. Never Split the Difference takes you inside the world of high-stakes negotiations and into Voss’s head, revealing the skills that helped him and his colleagues succeed where it mattered most: saving lives. In this practical guide, he shares the nine effective principles—counterintuitive tactics and strategies—you too can use to become more persuasive in both your professional and personal life.</p>";
          } else if (pickedbook=="e2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Getting to Yes: How to Negotiate Agreement Without Giving In</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Roger Fisher, William Ury<br>Narrator: Dennis Boutsikaris</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Getting to Yes offers a concise, step-by-step, proven strategy for coming to mutually acceptable agreements in every sort of conflict—whether it involves parents and children, neighbors, bosses and employees, customers or corporations, tenants or diplomats. Based on the work of the Harvard Negotiation Project, a group that deals continually with all levels of negotiation and conflict resolution from domestic to business to international, Getting to Yes tells listeners how to: <br><br>• Separate the people from the problem<br><br>• Focus on interests, not positions<br><br>• Work together to create options that will satisfy both parties<br><br>• Negotiate successfully with people who are more powerful, refuse to play by the rules, or resort to “dirty tricks”</p>";
          } else if (pickedbook=="e3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>HBR's 10 Must Reads on Negotiation</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Daniel Kahneman, Deepak Malhotra <br>Narrator: Chloe Cannon, Brian Holden</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Learn to be a better negotiator-and achieve the outcomes you want.<br><br>We've combed through hundreds of Harvard Business Review articles and selected the most important ones to help you avoid common mistakes, find hidden opportunities, and win the best deals possible.<br><br>This book will inspire you to: control the negotiation before you enter the room; persuade others to do what you want-for their own reasons; manage emotions on both sides of the table; understand the rules of negotiating across cultures; set the stage for a healthy relationship long after the ink has dried; and identify what you can live with and when to walk away.</p>";
          } else if (pickedbook=="e4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Flawless Consulting: A Guide to Getting Your Expertise Used, Third Edition</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Peter Block <br>Narrator: Erik Synnestvedt</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>When the landmark best-seller Flawless Consulting was first published more than three decades ago, it was quickly adopted as the 'consultant's bible.' With his legendary warmth and passion, Peter Block explained how to deal effectively with clients, peers, and others. The book continues to speak to people in a support function inside organizations as well as to external consultants.<br><br>This thoroughly revised and updated third edition of Peter Block's groundbreaking book explores the latest thinking on consultation. It includes new insights about how we can organize our consulting around discovering the strengths, positive examples, and gifts of the client organization or community. The book remains a practical and specific guide for anyone who needs to develop a capacity for deeper relatedness and partnership-which means it is for all who wish to make a real difference in the world.</p>";
          } else if (pickedbook=="e5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>What to Do When You're New: How to Be Comfortable, Confident, and Successful in New Situations</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Keith Rollag <br>Narrator: Walter Dixon</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Success starts with a simple act: doing something new. It can be starting a new job or school, or moving to a new neighborhood. It can be meeting a prospective client or attending a networking event. To achieve anything in life, you have to put yourself out there, meet new people, and try new things. But sometimes we freeze. Awkwardness, worry, and reluctance keep us stuck in our boxes. If we learn to conquer these natural anxieties, we can confidently seize life's opportunities.<br><br>In What to Do When You're New, Keith Rollag distills the work of leading scientists and his own original research into a groundbreaking formula for success. You'll learn not only why we feel so uneasy in new situations, but what you can do to become a more comfortable and effective newcomer. With practice, anyone can get better at being new.</p>";
          } else if (pickedbook=="ya1") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>The Hunger Games</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Suzanne Collins <br>Narrator: Tatiana Maslany</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Emmy Award-winning actress Tatiana Maslany narrates a brand-new special edition recording of the first audiobook in the worldwide bestselling trilogy from Suzanne Collins!<br><br>In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.<br><br>Sixteen-year-old Katniss Everdeen regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to death before-and survival, for her, is second nature. Still, if she is to win, she will have to start making choices that weigh survival against humanity and life against love.</p>";
          } else if (pickedbook=="ya2") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Divergent</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Veronica Roth <br>Narrator: Emma Galvin</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>Discover or return to the dystopian series that's captured the hearts of millions of teen and adult readers! This first in Veronica Roth's #1 New York Times bestselling Divergent series of books is the novel the inspired the major motion picture starring Shailene Woodley, Theo James, and Kate Winslet.<br><br>Perfect for fans of the Hunger Games and Maze Runner series, Divergent and its sequels, Insurgent and Allegiant, are the gripping story of a dystopian world transformed by courage, self-sacrifice, and love. Fans of the Divergent movie will find the book packed with just as much emotional depth and exhilarating action as the film, all told in beautiful, rich language.<br><br>One choice can transform you. Beatrice Prior's society is divided into five factions—Candor (the honest), Abnegation (the selfless), Dauntless (the brave), Amity (the peaceful), and Erudite (the intelligent).</p>";
          } else if (pickedbook=="ya3") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>With the Fire on High</h4>";
            document.getElementById("title2").innerHTML = "<p>Author:  <br>Narrator: </p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>2020 Audie Awards® WINNER - Narration by Author<br><br>2020 Audie Awards® Finalist - Young Adult <br><br>From the New York Times bestselling author of the National Book Award-winning title The Poet X comes a dazzling novel in prose about a girl with talent, pride, and a drive to feed the soul that keeps her fire burning bright.<br><br>Ever since she got pregnant freshman year, Emoni Santiago’s life has been about making the tough decisions—doing what has to be done for her daughter and her abuela. The one place she can let all that go is in the kitchen, where she adds a little something magical to everything she cooks, turning her food into straight-up goodness.<br><br>Even though she dreams of working as a chef after she graduates, Emoni knows that it’s not worth her time to pursue the impossible.Yet despite the rules she thinks she has to play by, once Emoni starts cooking, her only choice is to let her talent break free.</p>";
          } else if (pickedbook=="ya4") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Far from the Tree</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Robin Benway <br>Narrator: Julia Whelan</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>National Book Award Winner, PEN America Award Winner, and New York Times Bestseller!<br><br>Being the middle child has its ups and downs.<br><br>But for Grace, an only child who was adopted at birth, discovering that she is a middle child is a different ride altogether. After putting her own baby up for adoption, she goes looking for her biological family, including — Maya, her loudmouthed younger bio sister, who has a lot to say about their newfound family ties. Having grown up the snarky brunette in a house full of chipper redheads, she’s quick to search for traces of herself among these not-quite-strangers. And when her adopted family’s long-buried problems begin to explode to the surface, Maya can’t help but wonder where exactly it is that she belongs.<br><br>And Joaquin, their stoic older bio brother, who has no interest in bonding over their shared biological mother.</p>";
          } else if (pickedbook=="ya5") {
            $("#pickedbookimg").attr("src",pickedbook + ".jpg");
            document.getElementById("title1").innerHTML = "<h4>Imagine Me</h4>";
            document.getElementById("title2").innerHTML = "<p>Author: Tahereh Mafi <br>Narrator: Vikas Adam, Kate Simses</p>";
            document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
            document.getElementById("title4").innerHTML = "<p>The explosive finale to the New York Times and USA Today bestselling Shatter Me series.<br><br>Juliette Ferrars. Ella Sommers. Which is the truth and which is the lie?<br><br>Now that Ella knows who Juliette is and what she was created for, things have only become more complicated. As she struggles to understand the past that haunts her and looks to a future more uncertain than ever, the lines between right and wrong—between Ella and Juliette—blur. And with old enemies looming, her destiny may not be her own to control.<br><br>The day of reckoning for the Reestablishment is coming. But she may not get to choose what side she fights on.</p>";










    } else if (pickedbook=="allthelight") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>All The Light We Cannot See</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Anthony Doerr<br>Narrator: Julie Teal</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Marie Laure lives with her father in Paris within walking distance of the Museum of Natural History where he works as the master of the locks (there are thousands of locks in the museum). When she is six, she goes blind, and her father builds her a model of their neighborhood, every house, every manhole, so she can memorize it with her fingers and navigate the real streets with her feet and cane. When the Germans occupy Paris, father and daughter flee to Saint-Malo on the Brittany coast, where Marie-Laure’s agoraphobic great uncle lives in a tall, narrow house by the sea wall. <br><br> In another world in Germany, an orphan boy, Werner, grows up with his younger sister, Jutta, both enchanted by a crude radio Werner finds. He becomes a master at building and fixing radios, a talent that wins him a place at an elite and brutal military academy and, ultimately, makes him a highly specialized tracker of the Resistance. </p>";

    } else if (pickedbook=="hobbit") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>The Hobbit</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: J.R.R. Tolkien <br>Narrator: Andy Serkis</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>This brand-new unabridged audio book of J. R. R. Tolkien’s beloved The Hobbit is read by the BAFTA award-winning actor, director and author, Andy Serkis. <br><br>Bilbo Baggins is a hobbit who enjoys a comfortable, unambitious life, rarely travelling further than the pantry of his hobbit-hole in Bag End. But his contentment is disturbed when the wizard, Gandalf, and a company of thirteen dwarves arrive on his doorstep one day, to whisk him away on a journey ‘there and back again’. They have a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon… <br><br>The prelude to THE LORD OF THE RINGS, THE HOBBIT has sold many millions of copies since its publication in 1937, establishing itself as one of the most influential books of the twentieth century. </p>";

    } else if (pickedbook=="perks") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>The Perks of Being a Wallflower</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Stephen Chbosky <br>Narrator: Noah Galvin</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Read the cult-favorite coming of age story that takes a sometimes heartbreaking, often hysterical, and always honest look at high school in all its glory. Now a major motion picture starring Logan Lerman and Emma Watson, The Perks of Being a Wallflower is a funny, touching, and haunting modern classic. <br><br>The critically acclaimed debut novel from Stephen Chbosky, Perks follows observant “wallflower” Charlie as he charts a course through the strange world between adolescence and adulthood. First dates, family drama, and new friends. Sex, drugs, and The Rocky Horror Picture Show. Devastating loss, young love, and life on the fringes. Caught between trying to live his life and trying to run from it, Charlie must learn to navigate those wild and poignant roller-coaster days known as growing up.</p>";

    } else if (pickedbook=="sapiens") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>Sapiens: A Brief History of Humankind</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Yuval Noah Harari  <br>Narrator: Derek Perkins</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>New York Times Bestseller<br><br>From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.”<br><br>One hundred thousand years ago, at least six different species of humans inhabited Earth. Yet today there is only one—homo sapiens. What happened to the others? And what may happen to us? <br><br>Most books about the history of humanity pursue either a historical or a biological approach, but Dr. Yuval Noah Harari breaks the mold with this highly original book that begins about 70,000 years ago with the appearance of modern cognition.</p>";
    }

    else if (pickedbook=="new1") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>Why Birds Sing</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Nina Berkhout <br>Narrator: Madeleine Lambert</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>When opera singer Dawn Woodward has an onstage flameout, all she wants is to be left alone. She’s soon faced with other complications the day her husband announces her estranged brother-in-law, Tariq, is undergoing cancer treatment and moving in, his temperamental parrot in tow. To make matters worse, though she can’t whistle herself, she has been tasked with teaching arias to an outspoken group of devoted siffleurs who call themselves the Warblers. Eventually, Tariq and his bird join the class, and Dawn forms unexpected friendships with her new companions. But when her marriage shows signs of trouble and Tariq’s health declines, she begins questioning her foundations, including the career that she has worked so hard to build and the true nature of love and song.</p>";
    } else if (pickedbook=="new2") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>The Hollow Places</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: T. Kingfisher <br>Narrator: Hillary Huber</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A young woman discovers a strange portal in her uncle’s house, leading to madness and terror in this gripping new novel from the author of the “innovative, unexpected, and absolutely chilling” (Mira Grant, Nebula Award–winning author) The Twisted Ones.<br><br>Pray they are hungry.<br><br>Kara finds the words in the mysterious bunker that she’s discovered behind a hole in the wall of her uncle’s house. Freshly divorced and living back at home, Kara now becomes obsessed with these cryptic words and starts exploring this peculiar area—only to discover that it holds portals to countless alternate realities. But these places are haunted by creatures that seem to hear thoughts…and the more one fears them, the stronger they become.<br><br></p>";
    } else if (pickedbook=="new3") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>The Smuggler’s Daughter</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Kerry Barrett <br>Narrator: Emma Powell, Gloria Sanders</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Only she knows the truth. Only she can save them.<br><br>1799<br><br>Emily Moon lives with her mother in an inn on a clifftop in the darkest reaches of Cornwall. After her father mysteriously disappears, her mother finds solace at the bottom of a bottle, and the only way to keep afloat is to turn a blind eye to the smugglers who send signals from the clifftops. But Emily knows that the smugglers killed her father to ensure his silence, and she will not let his murder go unpunished…<br><br>Present day<br><br>After a case ends in tragedy, police officer Phoebe Bellingham flees to Cornwall for a summer of respite. But rather than the sunny Cornwall of her dreams, she finds herself on storm-beaten cliffs, surrounded by stories of ghosts and smugglers – and the mysterious Emily Moon, who vanished without a trace over two centuries ago. As rain lashes down around her, Phoebe determines to find the truth behind the rumours – but what she uncovers will put herself in danger too…</p>";
    } else if (pickedbook=="new4") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>To Sleep in a Sea of Stars</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Christopher Paolini <br>Narrator: Jennifer Hale</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>To Sleep in a Sea of Stars is a masterful epic science fiction novel from the New York Times and Sunday Times bestselling author of the Inheritance Cycle, Christopher Paolini.<br><br>Kira Navárez dreamed of life on new worlds<br><br>Now she’s awakened a nightmare<br><br>During a routine survey mission on an uncolonized planet, Kira finds an alien relic. At first she’s delighted, but elation turns to terror when the ancient dust around her begins to move.<br><br>As war erupts among the stars, Kira is launched into a galaxy-spanning odyssey of discovery and transformation. First contact isn’t at all what she imagined, and events push her to the very limits of what it means to be human.<br><br>While Kira faces her own horrors, Earth and its colonies stand upon the brink of annihilation. Now, Kira might be humanity’s greatest and final hope…</p>";
    } else if (pickedbook=="new5") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>Total Blackout</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Alex Shaw <br>Narrator: Leighton Pugh</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The start of a gripping new crime thriller series introducing ex-SAS trooper Jack Tate!<br><br>A catastrophic attack. A country in chaos. A race to prevent war.<br><br>British MI6 agent, and former SAS trooper, Jack Tate is trying to escape his past when he witnesses a terrorist attack of unthinkable scale. An electro-magnetic pulse knocks out the US power grid, killing anything with a computer processor, throwing the whole country into chaos.<br><br>Under the cover of the blackout, a clandestine operation aims to assassinate prominent public figures on US soil. Looting and violence spreads across the country. And Jack Tate’s past comes back to haunt him. As the only intelligence operative on the ground, he is hurled into a mission that will put him – and the people he loves – in immediate danger.<br><br>With the fate of the United States on the line, only he can prevent the horror of a new world war.</p>";
    } else if (pickedbook=="ken") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>The Evening and the Morning: The Prequel to The Pillars of the Earth, A Kingsbridge Novel</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Ken Follett <br>Narrator: John Lee</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>From the bestselling author Ken Follett, The Evening and the Morning is a historical epic that will end where The Pillars of the Earth begins.<br><br>A TIME OF CONFLICT<br>It is 997 CE, the end of the Dark Ages, and England faces attacks from the Welsh in the west and the Vikings in the east. Life is hard, and those with power wield it harshly, bending justice according to their will – often in conflict with the king. With his grip on the country fragile and with no clear rule of law, chaos and bloodshed reign.<br><br>THREE LIVES INTERTWINED<br>Into this uncertain world three people come to the fore: a young boatbuilder, who dreams of a better future when a devastating Viking raid shatters the life that he and the woman he loves hoped for; a Norman noblewoman, who follows her beloved husband across the sea to a new land only to find her life there shockingly different; and a capable monk at Shiring Abbey, who dreams of transforming his humble abbey into a centre of learning admired throughout Europe.</p>";
    } else if (pickedbook=="gambit") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>The Queen’s Gambit</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Walter Tevis <br>Narrator: Amy Landon</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>When eight-year-old Beth Harmon’s parents are killed in an automobile accident, she is placed in an orphanage in Mount Sterling, Kentucky. Plain and shy, Beth learns to play chess from the janitor in the basement and discovers she is a prodigy. Though penniless, she is desperate to learn more—and steals a chess magazine and enough money to enter a tournament. Beth also steals some of her foster mother’s tranquilizers to which she is becoming addicted.<br><br>At thirteen, Beth wins the chess tournament. By the age of sixteen she is competing in the US Open Championship and, like Fast Eddie in The Hustler, she hates to lose. By eighteen she is the US champion—and Russia awaits.<br><br>Fast-paced and elegantly written, The Queen’s Gambit is a thriller masquerading as a chess novel—one that’s sure to keep you on the edge of your seat.</p>";
    } else if (pickedbook=="onemore") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>One More For Christmas</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Sarah Morgan <br>Narrator: Lucy Tregear</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>A no.1 Kindle and Apple and top three Sunday Times bestseller ‘Christmas isn't Christmas without a Sarah Morgan novel to inhale…A feel-good family saga with characters that leap off the page – just perfection’ Laura Jane Williams, bestselling author of Our Stop<br><br>Gayle is a highly successful and motivated business woman, but her success has come at a price – she hasn’t spoken to her daughters, Ella and Samantha, for years. But when Gayle has an accident at work, she realises she needs to make amends with her family.<br><br>And so she invites herself to join Ella and Samantha for their Christmas in the beautiful Scottish Highlands. The sisters are none too pleased that their mother has inserted herself into their Christmas plans. They have each other – and don’t need their mother back in their lives. Or so they think…</p>";
    } else if (pickedbook=="find") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>Find Them Dead</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Peter James <br>Narrator: Daniel Weyman</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Roy Grace, creation of the award-winning author Peter James, unearths a powerful criminal network in Find Them Dead.<br><br>Ending his secondment to London’s Met Police, Roy Grace gets a tip-off about a county lines drugs mastermind operating out of Brighton. On his first day back in his old job in Sussex, he is called to a seemingly senseless murder.<br><br>Separately, Meg Magellan finally has her life back together, five years after the car crash that killed her husband and their son. Her daughter, Laura, now 18, is on her gap year travelling in South America with a friend, and Meg misses her badly. Laura is all she has in the world.<br><br>In between jobs, Meg receives a summons for jury service. She’s excited – it might be interesting and will help distract her from constantly worrying about Laura. But when she is selected for the trial of a major Brighton drugs overlord, everything changes.</p>";
    } else if (pickedbook=="walk") {
        $("#pickedbookimg").attr("src",pickedbook + ".jpg");
        document.getElementById("title1").innerHTML = "<h4>Walk the Wire</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: David Baldacci <br>Narrator: Orlagh Cassidy, Kyf Brewer</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>Remember his name: FBI Agent Amos Decker is back in a brand new thrilling memory man investigation from number 1 bestseller, David Baldacci.<br><br>A town with a secret.<br><br>A lone hunter discovers the remains of a woman in North Dakota’s Badlands. She appears to have had a post-mortem performed on her reminiscent of those only seen on TV shows – but this time, there was no slab, morgue or camera in sight.<br><br>A victim without a past.<br><br>The reason why Irene Cramer’s death merits an FBI investigation becomes rapidly clear when key questions surface about her mysterious past. Little is known about this school teacher, where she came from or her true identity. She clearly had something to hide.<br><br>Walk the Wire by David Baldacci is the sixth book in the Amos Decker series.</p>";
    } else if (pickedbook=="imageDiv1") {
        var firstimg = localStorage.getItem("firstbook");
        var secondimg = localStorage.getItem("secondbook");
        var thirdimg = localStorage.getItem("lastbook");
        if (firstimg == "liked") {
          $("#pickedbookimg").attr("src","gambit.jpg");
          document.getElementById("title1").innerHTML = "<h4>The Queen’s Gambit</h4>";
          document.getElementById("title2").innerHTML = "<p>Author: Walter Tevis <br>Narrator: Amy Landon</p>";
          document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
          document.getElementById("title4").innerHTML = "<p>When eight-year-old Beth Harmon’s parents are killed in an automobile accident, she is placed in an orphanage in Mount Sterling, Kentucky. Plain and shy, Beth learns to play chess from the janitor in the basement and discovers she is a prodigy. Though penniless, she is desperate to learn more—and steals a chess magazine and enough money to enter a tournament. Beth also steals some of her foster mother’s tranquilizers to which she is becoming addicted.<br><br>At thirteen, Beth wins the chess tournament. By the age of sixteen she is competing in the US Open Championship and, like Fast Eddie in The Hustler, she hates to lose. By eighteen she is the US champion—and Russia awaits.<br><br>Fast-paced and elegantly written, The Queen’s Gambit is a thriller masquerading as a chess novel—one that’s sure to keep you on the edge of your seat.</p>";
        } else if (firstimg == "dismissed" && secondimg =="liked") {
          $("#pickedbookimg").attr("src","elea.jpg");
          document.getElementById("title1").innerHTML = "<h4>Eleanor Oliphant is Completely Fine</h4>";
          document.getElementById("title2").innerHTML = "<p>Author: Gail Honeyman <br>Narrator: Cathleen McCarron</p>";
          document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
          document.getElementById("title4").innerHTML = "<p>No.1 Sunday Times bestseller and No.1 New York Times bestseller<br><br>Eleanor Oliphant has learned how to survive – but not how to live<br><br>Eleanor Oliphant leads a simple life. She wears the same clothes to work every day, eats the same meal deal for lunch every day and buys the same two bottles of vodka to drink every weekend.<br><br>Eleanor Oliphant is happy. Nothing is missing from her carefully timetabled life. Except, sometimes, everything.<br><br>One simple act of kindness is about to shatter the walls Eleanor has built around herself. Now she must learn how to navigate the world that everyone else seems to take for granted – while searching for the courage to face the dark corners she’s avoided all her life.<br><br>Change can be good. Change can be bad. But surely any change is better than… fine?</p>";
        } else if (firstimg == "dismissed" && secondimg =="dismissed" && thirdimg=="liked") {
          $("#pickedbookimg").attr("src","alch.jpg");
          document.getElementById("title1").innerHTML = "<h4>The Alchemist</h4>";
          document.getElementById("title2").innerHTML = "<p>Author: Paulo Coelho <br>Narrator: Jeremy Irons</p>";
          document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
          document.getElementById("title4").innerHTML = "<p>The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired.<br><br>Paulo Coelho’s masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.<br><br>The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life’s path, and, above all, following our dreams.</p>";
        }
    } else if (pickedbook=="imageDiv2") {
      var firstimg = localStorage.getItem("firstbook");
      var secondimg = localStorage.getItem("secondbook");
      var thirdimg = localStorage.getItem("lastbook");
      if (firstimg == "liked" && secondimg =="liked" && thirdimg=="dismissed") {
        $("#pickedbookimg").attr("src", "elea.jpg");
        document.getElementById("title1").innerHTML = "<h4>Eleanor Oliphant is Completely Fine</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Gail Honeyman <br>Narrator: Cathleen McCarron</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>No.1 Sunday Times bestseller and No.1 New York Times bestseller<br><br>Eleanor Oliphant has learned how to survive – but not how to live<br><br>Eleanor Oliphant leads a simple life. She wears the same clothes to work every day, eats the same meal deal for lunch every day and buys the same two bottles of vodka to drink every weekend.<br><br>Eleanor Oliphant is happy. Nothing is missing from her carefully timetabled life. Except, sometimes, everything.<br><br>One simple act of kindness is about to shatter the walls Eleanor has built around herself. Now she must learn how to navigate the world that everyone else seems to take for granted – while searching for the courage to face the dark corners she’s avoided all her life.<br><br>Change can be good. Change can be bad. But surely any change is better than… fine?</p>";
      } else if (firstimg == "liked" && secondimg =="dismissed" && thirdimg=="liked"){
        $("#pickedbookimg").attr("src", "alch.jpg");
        document.getElementById("title1").innerHTML = "<h4>The Alchemist</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Paulo Coelho <br>Narrator: Jeremy Irons</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired.<br><br>Paulo Coelho’s masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.<br><br>The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life’s path, and, above all, following our dreams.</p>";
      } else if (firstimg == "dismissed" && secondimg =="liked" && thirdimg=="liked"){
        $("#pickedbookimg").attr("src", "alch.jpg");
        document.getElementById("title1").innerHTML = "<h4>The Alchemist</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Paulo Coelho <br>Narrator: Jeremy Irons</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired.<br><br>Paulo Coelho’s masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.<br><br>The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life’s path, and, above all, following our dreams.</p>";
      } else if (firstimg == "liked" && secondimg =="liked" && thirdimg=="liked"){
        $("#pickedbookimg").attr("src", "elea.jpg");
        document.getElementById("title1").innerHTML = "<h4>Eleanor Oliphant is Completely Fine</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Gail Honeyman <br>Narrator: Cathleen McCarron</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>No.1 Sunday Times bestseller and No.1 New York Times bestseller<br><br>Eleanor Oliphant has learned how to survive – but not how to live<br><br>Eleanor Oliphant leads a simple life. She wears the same clothes to work every day, eats the same meal deal for lunch every day and buys the same two bottles of vodka to drink every weekend.<br><br>Eleanor Oliphant is happy. Nothing is missing from her carefully timetabled life. Except, sometimes, everything.<br><br>One simple act of kindness is about to shatter the walls Eleanor has built around herself. Now she must learn how to navigate the world that everyone else seems to take for granted – while searching for the courage to face the dark corners she’s avoided all her life.<br><br>Change can be good. Change can be bad. But surely any change is better than… fine?</p>";
      }
    } else if (pickedbook=="imageDiv3") {
      var firstimg = localStorage.getItem("firstbook");
      var secondimg = localStorage.getItem("secondbook");
      var thirdimg = localStorage.getItem("lastbook");
      if (firstimg == "liked" && secondimg =="liked" && thirdimg=="liked") {
        $("#pickedbookimg").attr("src","alch.jpg");
        document.getElementById("title1").innerHTML = "<h4>The Alchemist</h4>";
        document.getElementById("title2").innerHTML = "<p>Author: Paulo Coelho <br>Narrator: Jeremy Irons</p>";
        document.getElementById("review").innerHTML = '<img width="45%" src="review3.png">';
        document.getElementById("title4").innerHTML = "<p>The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired.<br><br>Paulo Coelho’s masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.<br><br>The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life’s path, and, above all, following our dreams.</p>";
      }
    }
  }
}








if(localStorage) {
	$(document).ready(function() {
		$(".valdbok").click(function() {
      var radio_check_val = "";
          for (i = 0; i < document.getElementsByName('fruit').length; i++) {
              if (document.getElementsByName('fruit')[i].checked) {
		      
		$($(this).nextElementSibling).css("background-color", "green")


                if (category=="" && category2=="" && category3=="" && category4=="") {
                  window.category = document.getElementsByName('fruit')[i].id;
                  window.localStorage.setItem('category', category);
                }

                if (document.getElementsByName('fruit')[i].id != category && category2=="" && category3=="" && category4=="") {
                  window.category2 = document.getElementsByName('fruit')[i].id;
                  window.localStorage.setItem('category2', category2);
                }

                if (document.getElementsByName('fruit')[i].id != category && document.getElementsByName('fruit')[i].id != category2 && category3=="" && category4=="") {
                  window.category3 = document.getElementsByName('fruit')[i].id;
                  window.localStorage.setItem('category3', category3);
                }

                if (document.getElementsByName('fruit')[i].id != category && document.getElementsByName('fruit')[i].id != category2 && document.getElementsByName('fruit')[i].id != category3 && category4=="") {
                  window.category4 = document.getElementsByName('fruit')[i].id;
                  window.localStorage.setItem('category4', category4);
                }

                var button = document.getElementById("pickedButton").style.backgroundColor;
                document.getElementById("pickedButton").style.background = "rgb(255,92,40)";
                document.getElementById("pickedButton").style.border = "none";
              }
            }
		});
	});
}




function showbook() {
  var firstpick = localStorage.getItem('category');
  var secondpick = localStorage.getItem("category2");
  var thirdpick = localStorage.getItem("category3");
  var fourthpick = localStorage.getItem("category4");

  if (typeof(Storage) !== "undefined") {
    if (firstpick != "") {
      if (firstpick == "detective") {
      document.getElementById('title1').innerHTML = "<p><b>Detective storys for you<b></p>";
        $("#imgspace1").attr("src","d1.jpg");
        $("#imgspace2").attr("src","d2.jpg");
        $("#imgspace3").attr("src","d3.jpg");
        $("#imgspace4").attr("src","d4.jpg");
        $("#imgspace5").attr("src","d5.jpg");
      } else if (firstpick == "quick-listening") {
        document.getElementById('title1').innerHTML = "<p><b>Quick listening - shorter than 1h<b></p>";
        $("#imgspace1").attr("src","q1.jpg");
        $("#imgspace2").attr("src","q2.jpg");
        $("#imgspace3").attr("src","q3.jpg");
        $("#imgspace4").attr("src","q4.jpg");
        $("#imgspace5").attr("src","q5.jpg");
      } else if (firstpick == "true-crime") {
        document.getElementById('title1').innerHTML = "<p><b>New True Crime<b></p>";
        $("#imgspace1").attr("src","tc1.jpg");
        $("#imgspace2").attr("src","tc2.jpg");
        $("#imgspace3").attr("src","tc3.jpg");
        $("#imgspace4").attr("src","tc4.jpg");
        $("#imgspace5").attr("src","tc5.jpg");
      } else if (firstpick == "novels") {
        document.getElementById('title1').innerHTML = "<p><b>Top Novels<b></p>";
        $("#imgspace1").attr("src","n1.jpg");
        $("#imgspace2").attr("src","n2.jpg");
        $("#imgspace3").attr("src","n3.jpg");
        $("#imgspace4").attr("src","n4.jpg");
        $("#imgspace5").attr("src","n5.jpg");
      } else if (firstpick == "podcasts") {
        document.getElementById('title1').innerHTML = "<p><b>Podcast<b></p>";
        $("#imgspace1").attr("src","p1.jpg");
        $("#imgspace2").attr("src","p2.jpg");
        $("#imgspace3").attr("src","p3.jpg");
        $("#imgspace4").attr("src","p4.jpg");
        $("#imgspace5").attr("src","p5.jpg");
      } else if (firstpick == "thrillers") {
        document.getElementById('title1').innerHTML = "<p><b>Cold Case Thrillers<b></p>";
        $("#imgspace1").attr("src","t1.jpg");
        $("#imgspace2").attr("src","t2.jpg");
        $("#imgspace3").attr("src","t3.jpg");
        $("#imgspace4").attr("src","t4.jpg");
        $("#imgspace5").attr("src","t5.jpg");
      } else if (firstpick == "kids") {
        document.getElementById('title1').innerHTML = "<p><b>For the Kids<b></p>";
        $("#imgspace1").attr("src","k1.jpg");
        $("#imgspace2").attr("src","k2.jpg");
        $("#imgspace3").attr("src","k3.jpg");
        $("#imgspace4").attr("src","k4.jpg");
        $("#imgspace5").attr("src","k5.jpg");
      } else if (firstpick == "helath-and-sleep") {
        document.getElementById('title1').innerHTML = "<p><b>Health & Sleep<b></p>";
        $("#imgspace1").attr("src","hs1.jpg");
        $("#imgspace2").attr("src","hs2.jpg");
        $("#imgspace3").attr("src","hs3.jpg");
        $("#imgspace4").attr("src","hs4.jpg");
        $("#imgspace5").attr("src","hs5.jpg");
      } else if (firstpick == "romance") {
        document.getElementById('title1').innerHTML = "<p><b>Love books that makes you blue<b></p>";
        $("#imgspace1").attr("src","r1.jpg");
        $("#imgspace2").attr("src","r2.jpg");
        $("#imgspace3").attr("src","r3.jpg");
        $("#imgspace4").attr("src","r4.jpg");
        $("#imgspace5").attr("src","r5.jpg");
      } else if (firstpick == "history") {
        document.getElementById('title1').innerHTML = "<p><b>Popular History Books<b></p>";
        $("#imgspace1").attr("src","h1.jpg");
        $("#imgspace2").attr("src","h2.jpg");
        $("#imgspace3").attr("src","h3.jpg");
        $("#imgspace4").attr("src","h4.jpg");
        $("#imgspace5").attr("src","h5.jpg");
      } else if (firstpick == "personal-development") {
        document.getElementById('title1').innerHTML = "<p><b>Personal development for you<b></p>";
        $("#imgspace1").attr("src","pd1.jpg");
        $("#imgspace2").attr("src","pd2.jpg");
        $("#imgspace3").attr("src","pd3.jpg");
        $("#imgspace4").attr("src","pd4.jpg");
        $("#imgspace5").attr("src","pd5.jpg");
      } else if (firstpick == "fantasy-and-scfi") {
        document.getElementById('title1').innerHTML = "<p><b>Fantasy and ScFi<b></p>";
        $("#imgspace1").attr("src","fs1.jpg");
        $("#imgspace2").attr("src","fs2.jpg");
        $("#imgspace3").attr("src","fs3.jpg");
        $("#imgspace4").attr("src","fs4.jpg");
        $("#imgspace5").attr("src","fs5.jpg");
      } else if (firstpick == "facts") {
        document.getElementById('title1').innerHTML = "<p><b>Popular Facts and Science<b></p>";
        $("#imgspace1").attr("src","f1.jpg");
        $("#imgspace2").attr("src","f2.jpg");
        $("#imgspace3").attr("src","f3.jpg");
        $("#imgspace4").attr("src","f4.jpg");
        $("#imgspace5").attr("src","f5.jpg");
      } else if (firstpick == "classic") {
        document.getElementById('title1').innerHTML = "<p><b>Classic<b></p>";
        $("#imgspace1").attr("src","c1.jpg");
        $("#imgspace2").attr("src","c2.jpg");
        $("#imgspace3").attr("src","c3.jpg");
        $("#imgspace4").attr("src","c4.jpg");
        $("#imgspace5").attr("src","c5.jpg");
      } else if (firstpick == "biography") {
        document.getElementById('title1').innerHTML = "<p><b>Biography - listen to the story<b></p>";
        $("#imgspace1").attr("src","b1.jpg");
        $("#imgspace2").attr("src","b2.jpg");
        $("#imgspace3").attr("src","b3.jpg");
        $("#imgspace4").attr("src","b4.jpg");
        $("#imgspace5").attr("src","b5.jpg");
      } else if (firstpick == "economy") {
        document.getElementById('title1').innerHTML = "<p><b>Economy<b></p>";
        $("#imgspace1").attr("src","e1.jpg");
        $("#imgspace2").attr("src","e2.jpg");
        $("#imgspace3").attr("src","e3.jpg");
        $("#imgspace4").attr("src","e4.jpg");
        $("#imgspace5").attr("src","e5.jpg");
      } else if (firstpick == "young-adults") {
        document.getElementById('title1').innerHTML = "<p><b>Young Adults Top List in Sweden<b></p>";
        $("#imgspace1").attr("src","ya1.jpg");
        $("#imgspace2").attr("src","ya2.jpg");
        $("#imgspace3").attr("src","ya3.jpg");
        $("#imgspace4").attr("src","ya4.jpg");
        $("#imgspace5").attr("src","ya5.jpg");
      } else {
      document.getElementById('title1').innerHTML = "<p><b>FELUNDIFINED<b></p>";
    }


    if (secondpick == "quick-listening"){
      document.getElementById('title2').innerHTML = "<p><b>Quick listening - shorter than 1h<b></p>";
      $("#imgspace21").attr("src","q1.jpg");
      $("#imgspace22").attr("src","q2.jpg");
      $("#imgspace23").attr("src","q3.jpg");
      $("#imgspace24").attr("src","q4.jpg");
      $("#imgspace25").attr("src","q5.jpg");
    } else if (secondpick == "detective") {
      document.getElementById('title2').innerHTML = "<p><b>Detective storys for you<b></p>";
      $("#imgspace21").attr("src","d1.jpg");
      $("#imgspace22").attr("src","d2.jpg");
      $("#imgspace23").attr("src","d3.jpg");
      $("#imgspace24").attr("src","d4.jpg");
      $("#imgspace25").attr("src","d5.jpg");
    } else if (secondpick == "true-crime") {
      document.getElementById('title2').innerHTML = "<p><b>New True Crime<b></p>";
      $("#imgspace21").attr("src","tc1.jpg");
      $("#imgspace22").attr("src","tc2.jpg");
      $("#imgspace23").attr("src","tc3.jpg");
      $("#imgspace24").attr("src","tc4.jpg");
      $("#imgspace25").attr("src","tc5.jpg");
    } else if (secondpick == "novels") {
      document.getElementById('title2').innerHTML = "<p><b>Top Novels<b></p>";
      $("#imgspace21").attr("src","n1.jpg");
      $("#imgspace22").attr("src","n2.jpg");
      $("#imgspace23").attr("src","n3.jpg");
      $("#imgspace24").attr("src","n4.jpg");
      $("#imgspace25").attr("src","n5.jpg");
    } else if (secondpick == "podcasts") {
      document.getElementById('title2').innerHTML = "<p><b>Podcast<b></p>";
      $("#imgspace21").attr("src","p1.jpg");
      $("#imgspace22").attr("src","p2.jpg");
      $("#imgspace23").attr("src","p3.jpg");
      $("#imgspace24").attr("src","p4.jpg");
      $("#imgspace25").attr("src","p5.jpg");
    } else if (secondpick == "thrillers") {
      document.getElementById('title2').innerHTML = "<p><b>Cold Case Thrillers<b></p>";
      $("#imgspace21").attr("src","t1.jpg");
      $("#imgspace22").attr("src","t2.jpg");
      $("#imgspace23").attr("src","t3.jpg");
      $("#imgspace24").attr("src","t4.jpg");
      $("#imgspace25").attr("src","t5.jpg");
    } else if (secondpick == "kids") {
      document.getElementById('title2').innerHTML = "<p><b>For the Kids<b></p>";
      $("#imgspace21").attr("src","k1.jpg");
      $("#imgspace22").attr("src","k2.jpg");
      $("#imgspace23").attr("src","k3.jpg");
      $("#imgspace24").attr("src","k4.jpg");
      $("#imgspace25").attr("src","k5.jpg");
    } else if (secondpick == "helath-and-sleep") {
      document.getElementById('title2').innerHTML = "<p><b>Health & Sleep<b></p>";
      $("#imgspace21").attr("src","hs1.jpg");
      $("#imgspace22").attr("src","hs2.jpg");
      $("#imgspace23").attr("src","hs3.jpg");
      $("#imgspace24").attr("src","hs4.jpg");
      $("#imgspace25").attr("src","hs5.jpg");
    } else if (secondpick == "romance") {
      document.getElementById('title2').innerHTML = "<p><b>Love books that makes you blue<b></p>";
      $("#imgspace21").attr("src","r1.jpg");
      $("#imgspace22").attr("src","r2.jpg");
      $("#imgspace23").attr("src","r3.jpg");
      $("#imgspace24").attr("src","r4.jpg");
      $("#imgspace25").attr("src","r5.jpg");
    } else if (secondpick == "history") {
      document.getElementById('title2').innerHTML = "<p><b>Popular History Books<b></p>";
      $("#imgspace21").attr("src","h1.jpg");
      $("#imgspace22").attr("src","h2.jpg");
      $("#imgspace23").attr("src","h3.jpg");
      $("#imgspace24").attr("src","h4.jpg");
      $("#imgspace25").attr("src","h5.jpg");
    } else if (secondpick == "personal-development") {
      document.getElementById('title2').innerHTML = "<p><b>Personal development for you<b></p>";
      $("#imgspace21").attr("src","pd1.jpg");
      $("#imgspace22").attr("src","pd2.jpg");
      $("#imgspace23").attr("src","pd3.jpg");
      $("#imgspace24").attr("src","pd4.jpg");
      $("#imgspace25").attr("src","pd5.jpg");
    } else if (secondpick == "fantasy-and-scfi") {
      document.getElementById('title2').innerHTML = "<p><b>Fantasy and ScFi<b></p>";
      $("#imgspace21").attr("src","fs1.jpg");
      $("#imgspace22").attr("src","fs2.jpg");
      $("#imgspace23").attr("src","fs3.jpg");
      $("#imgspace24").attr("src","fs4.jpg");
      $("#imgspace25").attr("src","fs5.jpg");
    } else if (secondpick == "facts") {
      document.getElementById('title2').innerHTML = "<p><b>Popular Facts and Science<b></p>";
      $("#imgspace21").attr("src","f1.jpg");
      $("#imgspace22").attr("src","f2.jpg");
      $("#imgspace23").attr("src","f3.jpg");
      $("#imgspace24").attr("src","f4.jpg");
      $("#imgspace25").attr("src","f5.jpg");
    } else if (secondpick == "classic") {
      document.getElementById('title2').innerHTML = "<p><b>Classic<b></p>";
      $("#imgspace21").attr("src","c1.jpg");
      $("#imgspace22").attr("src","c2.jpg");
      $("#imgspace23").attr("src","c3.jpg");
      $("#imgspace24").attr("src","c4.jpg");
      $("#imgspace25").attr("src","c5.jpg");
    } else if (secondpick == "biography") {
      document.getElementById('title2').innerHTML = "<p><b>Biography - listen to the story<b></p>";
      $("#imgspace21").attr("src","b1.jpg");
      $("#imgspace22").attr("src","b2.jpg");
      $("#imgspace23").attr("src","b3.jpg");
      $("#imgspace24").attr("src","b4.jpg");
      $("#imgspace25").attr("src","b5.jpg");
    } else if (secondpick == "economy") {
      document.getElementById('title2').innerHTML = "<p><b>Economy<b></p>";
      $("#imgspace21").attr("src","e1.jpg");
      $("#imgspace22").attr("src","e2.jpg");
      $("#imgspace23").attr("src","e3.jpg");
      $("#imgspace24").attr("src","e4.jpg");
      $("#imgspace25").attr("src","e5.jpg");
    } else if (secondpick == "young-adults") {
      document.getElementById('title2').innerHTML = "<p><b>Young Adults Top List in Sweden<b></p>";
      $("#imgspace21").attr("src","ya1.jpg");
      $("#imgspace22").attr("src","ya2.jpg");
      $("#imgspace23").attr("src","ya3.jpg");
      $("#imgspace24").attr("src","ya4.jpg");
      $("#imgspace25").attr("src","ya5.jpg");
    } else {
      document.getElementById('title2').innerHTML = "<p><b>Popular Facts and Science<b></p>";
      $("#imgspace21").attr("src","f1.jpg");
      $("#imgspace22").attr("src","f2.jpg");
      $("#imgspace23").attr("src","f3.jpg");
      $("#imgspace24").attr("src","f4.jpg");
      $("#imgspace25").attr("src","f5.jpg");
    }



    if (thirdpick == "quick-listening"){
      document.getElementById('title3').innerHTML = "<p><b>Quick listening - shorter than 1h<b></p>";
      $("#imgspace31").attr("src","q1.jpg");
      $("#imgspace32").attr("src","q2.jpg");
      $("#imgspace33").attr("src","q3.jpg");
      $("#imgspace34").attr("src","q4.jpg");
      $("#imgspace35").attr("src","q5.jpg");
    } else if (thirdpick == "true-crime") {
      document.getElementById('title3').innerHTML = "<p><b>New True Crime<b></p>";
      $("#imgspace31").attr("src","tc1.jpg");
      $("#imgspace32").attr("src","tc2.jpg");
      $("#imgspace33").attr("src","tc3.jpg");
      $("#imgspace34").attr("src","tc4.jpg");
      $("#imgspace35").attr("src","tc5.jpg");
    } else if (thirdpick == "detective") {
      document.getElementById('title3').innerHTML = "<p><b>Detective storys for you<b></p>";
      $("#imgspace31").attr("src","d1.jpg");
      $("#imgspace32").attr("src","d2.jpg");
      $("#imgspace33").attr("src","d3.jpg");
      $("#imgspace34").attr("src","d4.jpg");
      $("#imgspace35").attr("src","d5.jpg");
    } else if (thirdpick == "novels") {
      document.getElementById('title3').innerHTML = "<p><b>Top Novels<b></p>";
      $("#imgspace31").attr("src","n1.jpg");
      $("#imgspace32").attr("src","n2.jpg");
      $("#imgspace33").attr("src","n3.jpg");
      $("#imgspace34").attr("src","n4.jpg");
      $("#imgspace35").attr("src","n5.jpg");
    } else if (thirdpick == "podcasts") {
      document.getElementById('title3').innerHTML = "<p><b>Podcast<b></p>";
      $("#imgspace31").attr("src","p1.jpg");
      $("#imgspace32").attr("src","p2.jpg");
      $("#imgspace33").attr("src","p3.jpg");
      $("#imgspace34").attr("src","p4.jpg");
      $("#imgspace35").attr("src","p5.jpg");
    } else if (thirdpick == "thrillers") {
      document.getElementById('title3').innerHTML = "<p><b>Cold Case Thrillers<b></p>";
      $("#imgspace31").attr("src","t1.jpg");
      $("#imgspace32").attr("src","t2.jpg");
      $("#imgspace33").attr("src","t3.jpg");
      $("#imgspace34").attr("src","t4.jpg");
      $("#imgspace35").attr("src","t5.jpg");
    } else if (thirdpick == "kids") {
      document.getElementById('title3').innerHTML = "<p><b>For the Kids<b></p>";
      $("#imgspace31").attr("src","k1.jpg");
      $("#imgspace32").attr("src","k2.jpg");
      $("#imgspace33").attr("src","k3.jpg");
      $("#imgspace34").attr("src","k4.jpg");
      $("#imgspace35").attr("src","k5.jpg");
    } else if (thirdpick == "helath-and-sleep") {
      document.getElementById('title3').innerHTML = "<p><b>Health & Sleep<b></p>";
      $("#imgspace31").attr("src","hs1.jpg");
      $("#imgspace32").attr("src","hs2.jpg");
      $("#imgspace33").attr("src","hs3.jpg");
      $("#imgspace34").attr("src","hs4.jpg");
      $("#imgspace35").attr("src","hs5.jpg");
    } else if (thirdpick == "romance") {
      document.getElementById('title3').innerHTML = "<p><b>Love books that makes you blue<b></p>";
      $("#imgspace31").attr("src","r1.jpg");
      $("#imgspace32").attr("src","r2.jpg");
      $("#imgspace33").attr("src","r3.jpg");
      $("#imgspace34").attr("src","r4.jpg");
      $("#imgspace35").attr("src","r5.jpg");
    } else if (thirdpick == "history") {
      document.getElementById('title3').innerHTML = "<p><b>Popular History Books<b></p>";
      $("#imgspace31").attr("src","h1.jpg");
      $("#imgspace32").attr("src","h2.jpg");
      $("#imgspace33").attr("src","h3.jpg");
      $("#imgspace34").attr("src","h4.jpg");
      $("#imgspace35").attr("src","h5.jpg");
    } else if (thirdpick == "personal-development") {
      document.getElementById('title3').innerHTML = "<p><b>Personal development for you<b></p>";
      $("#imgspace31").attr("src","pd1.jpg");
      $("#imgspace32").attr("src","pd2.jpg");
      $("#imgspace33").attr("src","pd3.jpg");
      $("#imgspace34").attr("src","pd4.jpg");
      $("#imgspace35").attr("src","pd5.jpg");
    } else if (thirdpick == "fantasy-and-scfi") {
      document.getElementById('title3').innerHTML = "<p><b>Fantasy and ScFi<b></p>";
      $("#imgspace31").attr("src","fs1.jpg");
      $("#imgspace32").attr("src","fs2.jpg");
      $("#imgspace33").attr("src","fs3.jpg");
      $("#imgspace34").attr("src","fs4.jpg");
      $("#imgspace35").attr("src","fs5.jpg");
    } else if (thirdpick == "facts") {
      document.getElementById('title3').innerHTML = "<p><b>Popular Facts and Science<b></p>";
      $("#imgspace31").attr("src","f1.jpg");
      $("#imgspace32").attr("src","f2.jpg");
      $("#imgspace33").attr("src","f3.jpg");
      $("#imgspace34").attr("src","f4.jpg");
      $("#imgspace35").attr("src","f5.jpg");
    } else if (thirdpick == "classic") {
      document.getElementById('title3').innerHTML = "<p><b>Classic<b></p>";
      $("#imgspace31").attr("src","c1.jpg");
      $("#imgspace32").attr("src","c2.jpg");
      $("#imgspace33").attr("src","c3.jpg");
      $("#imgspace34").attr("src","c4.jpg");
      $("#imgspace35").attr("src","c5.jpg");
    } else if (thirdpick == "biography") {
      document.getElementById('title3').innerHTML = "<p><b>Biography - listen to the story<b></p>";
      $("#imgspace31").attr("src","b1.jpg");
      $("#imgspace32").attr("src","b2.jpg");
      $("#imgspace33").attr("src","b3.jpg");
      $("#imgspace34").attr("src","b4.jpg");
      $("#imgspace35").attr("src","b5.jpg");
    } else if (thirdpick == "economy") {
      document.getElementById('title3').innerHTML = "<p><b>Economy<b></p>";
      $("#imgspace31").attr("src","e1.jpg");
      $("#imgspace32").attr("src","e2.jpg");
      $("#imgspace33").attr("src","e3.jpg");
      $("#imgspace34").attr("src","e4.jpg");
      $("#imgspace35").attr("src","e5.jpg");
    } else if (thirdpick == "young-adults") {
      document.getElementById('title3').innerHTML = "<p><b>Young Adults Top List in Sweden<b></p>";
      $("#imgspace31").attr("src","ya1.jpg");
      $("#imgspace32").attr("src","ya2.jpg");
      $("#imgspace33").attr("src","ya3.jpg");
      $("#imgspace34").attr("src","ya4.jpg");
      $("#imgspace35").attr("src","ya5.jpg");
    }
    else {
      document.getElementById('title3').innerHTML = "<p><b>Biography - listen to the story<b></p>";
      $("#imgspace31").attr("src","b1.jpg");
      $("#imgspace32").attr("src","b2.jpg");
      $("#imgspace33").attr("src","b3.jpg");
      $("#imgspace34").attr("src","b4.jpg");
      $("#imgspace35").attr("src","b5.jpg");
    }

    if (fourthpick == "quick-listening"){
      document.getElementById('title4').innerHTML = "<p><b>Quick listening - shorter than 1h<b></p>";
      $("#imgspace41").attr("src","q1.jpg");
      $("#imgspace42").attr("src","q2.jpg");
      $("#imgspace43").attr("src","q3.jpg");
      $("#imgspace44").attr("src","q4.jpg");
      $("#imgspace45").attr("src","q5.jpg");
    } else if (fourthpick == "true-crime") {
      document.getElementById('title4').innerHTML = "<p><b>New True Crime<b></p>";
      $("#imgspace41").attr("src","tc1.jpg");
      $("#imgspace42").attr("src","tc2.jpg");
      $("#imgspace43").attr("src","tc3.jpg");
      $("#imgspace44").attr("src","tc4.jpg");
      $("#imgspace45").attr("src","tc5.jpg");
    } else if (fourthpick == "detective") {
      document.getElementById('title4').innerHTML = "<p><b>Detective storys for you<b></p>";
      $("#imgspace41").attr("src","d1.jpg");
      $("#imgspace42").attr("src","d2.jpg");
      $("#imgspace43").attr("src","d3.jpg");
      $("#imgspace44").attr("src","d4.jpg");
      $("#imgspace45").attr("src","d5.jpg");
    } else if (fourthpick == "novels") {
      document.getElementById('title4').innerHTML = "<p><b>Top Novels<b></p>";
      $("#imgspace41").attr("src","n1.jpg");
      $("#imgspace42").attr("src","n2.jpg");
      $("#imgspace43").attr("src","n3.jpg");
      $("#imgspace44").attr("src","n4.jpg");
      $("#imgspace45").attr("src","n5.jpg");
    } else if (fourthpick == "podcasts") {
      document.getElementById('title4').innerHTML = "<p><b>Podcast<b></p>";
      $("#imgspace41").attr("src","p1.jpg");
      $("#imgspace42").attr("src","p2.jpg");
      $("#imgspace43").attr("src","p3.jpg");
      $("#imgspace44").attr("src","p4.jpg");
      $("#imgspace45").attr("src","p5.jpg");
    } else if (fourthpick == "thrillers") {
      document.getElementById('title4').innerHTML = "<p><b>Cold Case Thrillers<b></p>";
      $("#imgspace41").attr("src","t1.jpg");
      $("#imgspace42").attr("src","t2.jpg");
      $("#imgspace43").attr("src","t3.jpg");
      $("#imgspace44").attr("src","t4.jpg");
      $("#imgspace45").attr("src","t5.jpg");
    } else if (fourthpick == "kids") {
      document.getElementById('title4').innerHTML = "<p><b>For the Kids<b></p>";
      $("#imgspace41").attr("src","k1.jpg");
      $("#imgspace42").attr("src","k2.jpg");
      $("#imgspace43").attr("src","k3.jpg");
      $("#imgspace44").attr("src","k4.jpg");
      $("#imgspace45").attr("src","k5.jpg");
    } else if (fourthpick == "helath-and-sleep") {
      document.getElementById('title4').innerHTML = "<p><b>Health & Sleep<b></p>";
      $("#imgspace41").attr("src","hs1.jpg");
      $("#imgspace42").attr("src","hs2.jpg");
      $("#imgspace43").attr("src","hs3.jpg");
      $("#imgspace44").attr("src","hs4.jpg");
      $("#imgspace45").attr("src","hs5.jpg");
    } else if (fourthpick == "romance") {
      document.getElementById('title4').innerHTML = "<p><b>Love books that makes you blue<b></p>";
      $("#imgspace41").attr("src","r1.jpg");
      $("#imgspace42").attr("src","r2.jpg");
      $("#imgspace43").attr("src","r3.jpg");
      $("#imgspace44").attr("src","r4.jpg");
      $("#imgspace45").attr("src","r5.jpg");
    } else if (fourthpick == "history") {
      document.getElementById('title4').innerHTML = "<p><b>Popular History Books<b></p>";
      $("#imgspace41").attr("src","h1.jpg");
      $("#imgspace42").attr("src","h2.jpg");
      $("#imgspace43").attr("src","h3.jpg");
      $("#imgspace44").attr("src","h4.jpg");
      $("#imgspace45").attr("src","h5.jpg");
    } else if (fourthpick == "personal-development") {
      document.getElementById('title4').innerHTML = "<p><b>Personal development for you<b></p>";
      $("#imgspace41").attr("src","pd1.jpg");
      $("#imgspace42").attr("src","pd2.jpg");
      $("#imgspace43").attr("src","pd3.jpg");
      $("#imgspace44").attr("src","pd4.jpg");
      $("#imgspace45").attr("src","pd5.jpg");
    } else if (fourthpick == "fantasy-and-scfi") {
      document.getElementById('title4').innerHTML = "<p><b>Fantasy and ScFi<b></p>";
      $("#imgspace41").attr("src","fs1.jpg");
      $("#imgspace42").attr("src","fs2.jpg");
      $("#imgspace43").attr("src","fs3.jpg");
      $("#imgspace44").attr("src","fs4.jpg");
      $("#imgspace45").attr("src","fs5.jpg");
    } else if (fourthpick == "facts") {
      document.getElementById('title4').innerHTML = "<p><b>Popular Facts and Science<b></p>";
      $("#imgspace41").attr("src","f1.jpg");
      $("#imgspace42").attr("src","f2.jpg");
      $("#imgspace43").attr("src","f3.jpg");
      $("#imgspace44").attr("src","f4.jpg");
      $("#imgspace45").attr("src","f5.jpg");
    } else if (fourthpick == "classic") {
      document.getElementById('title4').innerHTML = "<p><b>Classic<b></p>";
      $("#imgspace41").attr("src","c1.jpg");
      $("#imgspace42").attr("src","c2.jpg");
      $("#imgspace43").attr("src","c3.jpg");
      $("#imgspace44").attr("src","c4.jpg");
      $("#imgspace45").attr("src","c5.jpg");
    } else if (fourthpick == "biography") {
      document.getElementById('title4').innerHTML = "<p><b>Biography - listen to the story<b></p>";
      $("#imgspace41").attr("src","b1.jpg");
      $("#imgspace42").attr("src","b2.jpg");
      $("#imgspace43").attr("src","b3.jpg");
      $("#imgspace44").attr("src","b4.jpg");
      $("#imgspace45").attr("src","b5.jpg");
    } else if (fourthpick == "economy") {
      document.getElementById('title4').innerHTML = "<p><b>Economy<b></p>";
      $("#imgspace41").attr("src","e1.jpg");
      $("#imgspace42").attr("src","e2.jpg");
      $("#imgspace43").attr("src","e3.jpg");
      $("#imgspace44").attr("src","e4.jpg");
      $("#imgspace45").attr("src","e5.jpg");
    } else if (fourthpick == "young-adults") {
      document.getElementById('title4').innerHTML = "<p><b>Young Adults Top List in Sweden<b></p>";
      $("#imgspace41").attr("src","ya1.jpg");
      $("#imgspace42").attr("src","ya2.jpg");
      $("#imgspace43").attr("src","ya3.jpg");
      $("#imgspace44").attr("src","ya4.jpg");
      $("#imgspace45").attr("src","ya5.jpg");
    } else {
      document.getElementById('title4').innerHTML = "<p><b>Classic<b></p>";
      $("#imgspace41").attr("src","c1.jpg");
      $("#imgspace42").attr("src","c2.jpg");
      $("#imgspace43").attr("src","c3.jpg");
      $("#imgspace44").attr("src","c4.jpg");
      $("#imgspace45").attr("src","c5.jpg");
    }
}
}
}

    function viewbooks() {
      document.getElementById('hej').innerHTML = '<img src="gambit.jpg" class="mightlike" width="100%">';
    }

// function next() {
  $(document).ready(function () {
    var content = $(".content");
    var currentItem = content.filter(".active");
    var steps = $(".card").filter(".steps");
    var inactive1 = $(".inactive-1");
    var inactive2 = $(".inactive-2");

    $(".like").click(function () {
      var nextItem = currentItem.next();
      var lastItem = content.last();
      var contentFirst = content.first();

      currentItem.removeClass("active");

      if (currentItem.is(lastItem)) {
        currentItem = contentFirst.addClass("active");
        currentItem.css({ right: "10%", opacity: "1" });
        $(".step").animate({ width: "33%" });
        window.lastbook = "liked";
        window.localStorage.setItem("lastbook", "liked");
        window.location.href="homeBooksAdded.html";

      } else if (currentItem.is(contentFirst)) {
        window.firstbook = "liked";
        window.localStorage.setItem("firstbook", "liked");
        currentItem.animate({ opacity: 0 }, 1000);
        currentItem = nextItem.addClass("active");
        $(".step").animate({ width: "66%" });
        inactive2.animate(
          { height: "0", marginLeft: "0px", marginRight: "0px" },
          100
        );
      } else {
        window.secondbook = "liked";
        window.localStorage.setItem("secondbook", "liked");
        currentItem = nextItem.addClass("active");
        $(".step").animate({ width: "100%" });
        inactive1.animate(
          { height: "0", marginLeft: "0px", marginRight: "0px" },
          100
        );
      }
    });

    $(".dismiss").click(function () {
      var nextItem = currentItem.next();
      var lastItem = content.last();
      var contentFirst = content.first();

      currentItem.removeClass("active");

      if (currentItem.is(lastItem)) {
        currentItem = contentFirst.addClass("active");
        currentItem.css({ right: "10%", opacity: "1" });
        $(".step").animate({ width: "33%" });
        window.lastbook = "dismissed";
        window.localStorage.setItem("lastbook", "dismissed");
        window.location.href="homeBooksAdded.html";

      } else if (currentItem.is(contentFirst)) {
        window.firstbook = "dismissed";
        window.localStorage.setItem("firstbook", "dismissed");
        currentItem.animate({ opacity: 0 }, 1000);
        currentItem = nextItem.addClass("active");
        $(".step").animate({ width: "66%" });
        inactive2.animate(
          { height: "0", marginLeft: "0px", marginRight: "0px" },
          100
        );
      } else {
        window.secondbook = "dismissed";
        window.localStorage.setItem("secondbook", "dismissed");
        currentItem = nextItem.addClass("active");
        $(".step").animate({ width: "100%" });
        inactive1.animate(
          { height: "0", marginLeft: "0px", marginRight: "0px" },
          100
        );
      }
    });

  });


function aud_play_pause() {
  var content = $(".content");
  var currentItem = content.filter(".active");
  var steps = $(".card").filter(".steps");
  var inactive1 = $(".inactive-1");
  var inactive2 = $(".inactive-2");

  var nextItem = currentItem.next();
  var lastItem = content.last();
  var contentFirst = content.first();

  var myAudio = document.getElementById("myTune");
  var myAudio2 = document.getElementById("myTune2");
  var myAudio3 = document.getElementById("myTune3");
  var x = document.getElementById("toggleaudio");
  var y = document.getElementById("toggleaudio2");
  var z = document.getElementById("toggleaudio3");


  if (currentItem.is(contentFirst)) {
  if (myAudio.paused) {
    myAudio.play();
    x.innerHTML = '<p><i class="fas fa-pause" aria-hidden="true"></i> Pause sample</p>';
  } else {
    myAudio.pause();
    x.innerHTML = '<p><i class="fas fa-play" aria-hidden="true"></i> Play sample</p>';
  }
} else if (currentItem.is(lastItem)) {
    if (myAudio2.paused) {
      myAudio2.play();
      y.innerHTML = '<p><i class="fas fa-pause" aria-hidden="true"></i> Pause sample</p>';
    } else {
      myAudio2.pause();
      y.innerHTML = '<p><i class="fas fa-play" aria-hidden="true"></i> Play sample</p>';
    }
} else {
  if (myAudio3.paused) {
    myAudio3.play();
    z.innerHTML = '<p><i class="fas fa-pause" aria-hidden="true"></i> Pause sample</p>';
  } else {
    myAudio3.pause();
    z.innerHTML = '<p><i class="fas fa-play" aria-hidden="true"></i> Play sample</p>';
}
}
}


function addBook() {
  var img = document.createElement("img");
  var firstimg = localStorage.getItem("firstbook");
  var secondimg = localStorage.getItem("secondbook");
  var thirdimg = localStorage.getItem("lastbook");

  if (typeof(Storage) !== "undefined") {
    if (firstimg == "liked" && secondimg=="dismissed" && thirdimg=="dismissed") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="gambit.jpg">';
      document.getElementById("booktext").innerHTML = "<b>The Queen’s Gambit</b><br>Author: Walter Tevis<br>Narrator: Amy Landon";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");
    } else if (firstimg == "dismissed" && secondimg=="liked" && thirdimg=="dismissed") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="elea.jpg">';
      document.getElementById("booktext").innerHTML = "<b>Eleanor Oliphant is Completely Fine</b><br>Author: Gail Honeyman <br>Narrator: Cathleen McCarron";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");
    } else if (firstimg == "dismissed" && secondimg=="dismissed" && thirdimg=="liked") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="alch.jpg">';
      document.getElementById("booktext").innerHTML = "<b>The Alchemist</b><br>Author: Paulo Coelho<br>Narrator: Jeremy Irons";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");
    }

    else if (firstimg == "liked" && secondimg=="liked" && thirdimg=="dismissed") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="gambit.jpg">';
      document.getElementById("booktext").innerHTML = "<b>The Queen’s Gambit</b><br>Author: Walter Tevis<br>Narrator: Amy Landon";
      document.getElementById('imageDiv2').innerHTML = '<img width="100" height="100" src="elea.jpg">';
      document.getElementById("booktext2").innerHTML = "<b>Eleanor Oliphant</b><br>Author: Gail Honeyman <br>Narrator: Cath McCarron";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");
    }else if (firstimg == "dismissed" && secondimg=="liked" && thirdimg=="liked") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="elea.jpg">';
      document.getElementById("booktext").innerHTML = "<b>Eleanor Oliphant is Completely Fine</b><br>Author: Gail Honeyman <br>Narrator: Cathleen McCarron";
      document.getElementById('imageDiv2').innerHTML = '<img width="100" height="100" src="alch.jpg">';
      document.getElementById("booktext2").innerHTML = "<b>The Alchemist</b><br>Author: Paulo Coelho<br>Narrator: Jeremy Irons";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");
    }else if (firstimg == "liked" && secondimg=="dismissed" && thirdimg=="liked") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="gambit.jpg">';
      document.getElementById("booktext").innerHTML = "<b>The Queen’s Gambit</b><br>Author: Walter Tevis<br>Narrator: Amy Landon";
      document.getElementById('imageDiv2').innerHTML = '<img width="100" height="100" src="alch.jpg">';
      document.getElementById("booktext2").innerHTML = "<b>The Alchemist</b><br>Author: Paulo Coelho<br>Narrator: Jeremy Irons";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");
    }

    else if (firstimg == "dismissed" && secondimg=="dismissed" && thirdimg=="liked") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="alch.jpg">';
      document.getElementById("booktext").innerHTML = "<b>The Alchemist</b><br>Author: Paulo Coelho<br>Narrator: Jeremy Irons";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");
    }else if (firstimg == "dismissed" && secondimg=="liked" && thirdimg=="dismissed") {
        document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="elea.jpg">';
        document.getElementById("booktext").innerHTML = "<b>Eleanor Oliphant is Completely Fine</b><br>Author: Gail Honeyman <br>Narrator: Cathleen McCarron";

        document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
        var element = document.getElementById("divstyle");
        element.classList.add("mytooltip2");
    }else if (firstimg == "liked" && secondimg=="dismissed" && thirdimg=="dismissed") {
        document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="gambit.jpg">';
        document.getElementById("booktext").innerHTML = "<b>The Queen’s Gambit</b><br>Author: Walter Tevis<br>Narrator: Amy Landon";

        document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
        var element = document.getElementById("divstyle");
        element.classList.add("mytooltip2");
    }

    else if (firstimg == "liked" && secondimg=="liked" && thirdimg=="liked") {
      document.getElementById('imageDiv1').innerHTML = '<img width="100" height="100" src="gambit.jpg">';
      document.getElementById("booktext").innerHTML = "<b>The Queen’s Gambit</b><br>Author: Walter Tevis<br>Narrator: Amy Landon";
      document.getElementById('imageDiv2').innerHTML = '<img width="100" height="100" src="elea.jpg">';
      document.getElementById("booktext2").innerHTML = "<b>Eleanor Oliphant </b><br>Author: Gail Honeyman<br>Narrator: Cath McCarron";
      document.getElementById('imageDiv3').innerHTML = '<img width="100" height="100" src="alch.jpg">';
      document.getElementById("booktext3").innerHTML = "<b>The Alchemist</b><br>Author: Paulo Coelho<br>Narrator: Jeremy Irons";

      document.getElementById("tooltiptext").innerHTML = "Explore more<br>exciting books!";
      var element = document.getElementById("divstyle");
      element.classList.add("mytooltip2");

    } else if (firstimg == "dismissed" && secondimg=="dismissed" && thirdimg=="dismissed") {
      document.getElementById("booktext4").innerHTML = "Looking for something <br>to listen to?";
      var button = document.createElement('BUTTON');
      var text = document.createTextNode("Explore books");
      button.appendChild(text);
      imageDiv4.appendChild(button);
    }

  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}

function goBack() {
  window.history.back();
}

	$(document).ready(function() {
		    $(".starttest").click(function() {
          window.number = Math.floor((Math.random() * 2) + 1);
          window.localStorage.setItem('number', number);
          if (number==1) {
            // window.alert("det står" + number);
            window.location.href="information.html";
          } else {
            // window.alert("det står" + number);
            window.location.href="informationB.html";
          }
    });
  });

function survey() {
  var thenumber = window.localStorage.getItem('number');
  if (thenumber==1) {
    // window.alert(thenumber);
    window.location.href="https://rebeckarosdahl421154.typeform.com/to/ZK5J2DQk";
  } else {
    // window.alert(thenumber);
    window.location.href="https://rebeckarosdahl421154.typeform.com/to/eoEMJA9l";
  }
}
