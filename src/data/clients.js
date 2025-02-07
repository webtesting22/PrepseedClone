const clients = [

	{
		name: "Khushi Advertising",
		logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFjWSYcJu9hhu0cCrK67UPxowJdsjD5qDktA&s",
		portalUrl: "https://yellowspot.prepseed.com",
		websiteUrl: "https://khushiadvertising.com",
		tags: ["-"],
	},
	{
		name: "Het Graphics",
		logo: "https://hetgraphics.vercel.app/assets/HetLogo-CxlSDXa2.png",
		portalUrl: "https://yellowspot.prepseed.com",
		websiteUrl: "https://hetgraphics.vercel.app/",
		tags: ["-"],
	},
	{
		name: "Shanti Asiatic School",
		logo: "https://static.prepseed.com/brand/sas/landscape.jpg",
		portalUrl: "https://sas.prepseed.com",
		websiteUrl: "https://shantiasiaticahmedabad.com",
		tags: ["school"],
	},
	{
		name: "Keystone Universe Of Education",
		logo: "https://static.prepseed.com/brand/keystone/landscape.png",
		portalUrl: "https://keystone.prepseed.com",
		websiteUrl: "https://keystoneuniverse.com",
		tags: ["coaching"],
	},
	{
		name: "Reliable Institute Kota",
		logo: "https://static.prepleaf.com/brand/reliable.png",
		portalUrl: "https://reliablekota.prepseed.com",
		websiteUrl: "https://reliablekota.com",
		tags: ["coaching"],
	},
	{
		name: "Chiripal Group of Industries",
		logo: "https://chiripalgroup.com/wp-content/uploads/2022/02/Chiripal-Logo.png",
		portalUrl: "https://reliablekota.prepseed.com",
		websiteUrl: "https://chiripalgroup.com/",
		tags: ["coaching"],
	},
	{
		name: "Hitech",
		logo: "https://hitechprojects.vercel.app/static/media/hitech_logo.441af66c973ea5b6921a.png",
		portalUrl: "https://hitechprojects.co.in/",
		websiteUrl: "https://hitechprojects.co.in/",
		tags: ["coaching"],
	},
	{
		name: "Allen",
		logo: "https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/inventoryManagement/FDEyKmb23SRmf7FaQd9m/channels4_profile.jpg",
		// portalUrl: "",
		// websiteUrl: "",
		tags: ["coaching"],
	},
	{
		name: "Vyas Edification",
		logo: "https://static.prepleaf.com/brand/vyas.png",
		portalUrl: "https://prepare.vyasedification.com",
		websiteUrl: "https://www.vyasedification.com",
		tags: ["coaching"],
	},
	{
		name: "Ascentria",
		logo: "https://static.prepseed.com/brand/ascentria/ascentria.png",
		portalUrl: "https://ascentria.prepseed.com",
		websiteUrl: "https://ascentria.net",
		tags: ["coaching"],
	},
	{
		name: "Outlead Solutions",
		logo: "https://outlead-new-theme.vercel.app/Outleadlogo.png",
		portalUrl: "https://www.outleadsolutions.com/",
		websiteUrl: "https://www.outleadsolutions.com/",
		tags: ["coaching"],
	},
	{
		name: "YellowSpot",
		logo: "https://www.yellowspot.in/assets/yellowspotLogo-Dhddcho1.png",
		portalUrl: "https://yellowspot.prepseed.com",
		websiteUrl: "https://www.yellowspot.in/",
		tags: ["-"],
	},
	{
		name: "Tallentex",
		logo: "https://static.prepseed.com/brand/tallentex/tallentex.jpg",
		portalUrl: "https://tallentex.prepseed.com",
		websiteUrl: "https://www.tallentex.com/",
		tags: ["coaching"],
	},
	{
		name: "Dakshana",
		portalUrl: "https://dakshana.prepseed.com",
		websiteUrl: "https://www.dakshana.org/",
		logo: "https://static.prepseed.com/brand/dakshana/dakshana.png",
		tags: ["coaching"],
	},
	// {
	// 	name: "Mentor Prep",
	// 	portalUrl: "https://mentorprep.prepseed.in/",
	// 	websiteUrl: "https://www.mentorprep.in/",
	// 	logo: "https://static.wixstatic.com/media/f4d2c1_7b8186d72a124231a98bcfd305b62861~mv2.png/v1/fill/w_95,h_95,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f4d2c1_7b8186d72a124231a98bcfd305b62861~mv2.png",
	// 	tags: ["coaching"],
	// },
	{
		name: "Apollo International School",
		logo: "https://static.prepseed.com/brand/aisahm/logo.png",
		portalUrl: "https://aisahm.prepseed.com",
		websiteUrl: "http://www.aisahmedabad.edu.in/",
		tags: ["school"],
	},
	{
		name: "Scientia",
		logo: "https://static.prepleaf.com/brand/scientia/logo.png",
		portalUrl: "https://scientia.prepseed.com",
		tags: ["coaching"],
	},
	{
		name: "Brother's Academy",
		logo: "https://static.prepleaf.com/brand/brothersacademy/logo.jpg",
		websiteUrl: "https://brothersacademy.co.in",
		portalUrl: "https://brothersacademy.prepseed.com",
		tags: ["coaching"],
	},

	{
		name: "Mantra Prayas Institute",
		logo: "https://static.prepseed.com/brand/mantra/logo-square.jpg",
		portalUrl: "https://mantraprayas.prepseed.com",
		tags: ["coaching"],
	},

	{
		name: "Samanvay",
		logo: "https://static.prepseed.com/brand/samanvay/landscape.png",
		portalUrl: "https://samanvay.prepseed.com",
		tags: ["school"],
	},

	{
		name: "MkWay Edubrain",
		logo: "https://static.prepleaf.com/brand/mkway/logo.png",
		websiteUrl: "http://makwayedubrain.com",
		portalUrl: "https://mkway.prepleaf.com",
		tags: ["coaching"],
	},
	{
		name: "Uchaai",
		logo: "https://static.prepseed.com/brand/unchaai/logo-square.png",
		websiteUrl: "https://unchaai.com",
		portalUrl: "https://unchaai.prepseed.com",
		tags: ["coaching"],
	},
	{
		name: "Icon Academy",
		logo: "https://static.prepseed.com/brand/icon-academy/logo-square.jpg",
		portalUrl: "https://icon-academy.prepseed.com",
		tags: ["coaching"],
	},
	{
		name: "Vigyas Academy",
		logo: "https://static.prepseed.com/brand/vigyas/logo.jpg",
		portalUrl: "https://vigyas.prepseed.com",
		tags: ["coaching"],
	},
	{
		name: "Chanakaya Tutorial",
		logo: "https://static.prepseed.com/brand/chanakaya-tutorial/logo-square.jpg",
		portalUrl: "https://chanakaya-tutorial.prepseed.com",
		tags: ["coaching"],
	},
	{
		name: "Ramanujan Academy",
		logo: "https://static.prepseed.com/brand/ramanujan-jee/logo.jpg",
		portalUrl: "https://ramanujan-jee.prepseed.com/",
		tags: ["coaching"],
	},
	{
		hide: true,
		name: "Ciel Knowledge",
		logo: "https://static.prepseed.com/brand/ceil-knowledge.prepseed.com/logo.jpg",
		portalUrl: "https://ceil-knowledge.prepseed.com",
		tags: ["coaching"],
	},
	{
		name: "Master JEE",
		portalUrl: "https://master-jee.prepseed.com",
		logo: "https://static.prepseed.com/brand/master-jee/logo.jpeg",
		tags: ["coaching"],
	},
	{
		name: "Aryabhatta Classes",
		portalUrl: "https://aryabhatta-classes.prepseed.com",
		logo: "https://static.prepseed.com/brand/aryabhatta-classes/logo-square.png",
		tags: ["coaching"],
	},
	{
		name: "Edustation Academy",
		portalUrl: "https://edustation.prepseed.com",
		logo: "https://static.prepseed.com/brand/edustation/edustation.jpg",
		tags: ["coaching"],
	},
	{
		name: "Kaydee Career Institute",
		portalUrl: "https://kaydee.prepseed.com",
		logo: "https://static.prepseed.com/brand/kaydee/kaydee.jpeg",
		tags: ["coaching"],
	},
	{
		name: "Gurukul for JEE and NEET",
		portalUrl: "https://gurukul.prepseed.com",
		logo: "https://static.prepseed.com/brand/gurukul/gurukul.jpeg",
		tags: ["coaching"],
	},
	{
		name: "GPREP",
		portalUrl: "https://gprep.prepseed.com",
		logo: "https://static.prepseed.com/brand/gprep/gprep.jpg",
		tags: ["coaching"],
	},
	{
		name: "New Toppers Academy",
		portalUrl: "https://newtopper.prepseed.com",
		logo: "https://static.prepseed.com/brand/newtopper/newtopper.jpeg",
		tags: ["coaching"],
	},
	{
		name: "Science Wing",
		portalUrl: "https://sciencewing.prepseed.com",
		logo: "https://static.prepseed.com/brand/sciencewing/sciencewing.jpeg",
		tags: ["coaching"],
	},
	{
		name: "Privilege Institute",
		portalUrl: "https://privilege.prepseed.com",
		logo: "https://static.prepseed.com/brand/privilege/privilege.jpeg",
		tags: ["coaching"],
	},
	{
		name: "Lalji Mehrotra Lions School",
		portalUrl: "https://lml.prepseed.com",
		logo: "https://static.prepseed.com/brand/lml/lml-landscape.png",
		tags: ["school"],
	},
	{
		name: "Mahapragya Vidya Niketan",
		portalUrl: "https://mahapragya.prepseed.com",
		logo: "https://static.prepseed.com/brand/mahapragya/mahapragya.jpg",
		tags: ["school"],
	},
	{
		name: "Sandipani Vidhyalaya",
		portalUrl: "https://sandipani.prepseed.com",
		logo: "https://static.prepseed.com/brand/sandipani/logo.png",
		tags: ["school"],
	},
	{
		name: "Get your portal!",
		logo: "https://static.prepseed.com/brand/your-coaching/logo.png",
		type: "register",
		tags: ["school", "coaching", "college"],
	},
];

export default clients;
