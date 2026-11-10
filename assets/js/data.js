
var icons_map ={
  globe:'<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',

  cart:'<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.6"/><circle cx="20" cy="21" r="1.6"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>',
  code: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
    smartphone: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18.5h2"/></svg>',
	zap:'<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg>',
    rotate: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L3 10"/></svg>',
  cap: '<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9.5 12 4.5 2 9.5l10 5 10-5z"/><path d="M6 11.8V17c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8v-5.2"/><path d="M22 9.5v6"/></svg>',
	message:'<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.3 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.6a8.14 8.14 0 0 1-.9-3.9 8.36 8.36 0 0 1 8.5-8.3 8.38 8.38 0 0 1 8.5 8.3z"/></svg>',
   users:'<svg class="icon-lg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>'
};

var chk1 = '<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>'


var chk_dim ='<svg class="icon-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 5 7 16l-5-5"/></svg>'

var CHK_w = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';


var procs = {
   dev: [
		{

        t: "Discovery & Brief",

  	   d:'A free scoping call to map goals, users, and must-have features.'
    },
    {
      t: "Proposal & Contract",

       d: "Fixed scope, milestone plan, and transparent pricing — within 3 days."
    },
     {
	     t: "Design & Build",
      d:"Weekly demos on a staging link. You watch the product grow live."
		},
    {
         t:'Testing & Review',
         d: "QA across devices, your revision rounds, and a UAT sign-off."
      },
    {
      	t:"Launch & Support",
        d: "Go-live, handover docs, and a 30-day post-launch support window."
    }
  ],
  training:[
    {
      	t:'Needs Assessment' ,
          d:'We map your current skill level and define measurable outcomes.'
	  },
       {
        t: 'Curriculum Design',
    	   d: "A syllabus tailored to your goals, schedule, and tech stack."
      },

      {
	  	t: 'Intensive Sessions',

   	    d:"Live mentoring, hands-on labs, and real project work — not slides."
     },
       {
	      t:"Evaluation & Certificate",
          d: "Final assessment, personal feedback, and a verified certificate."
     }
  ]
}

var faq_data=[
    {
	  q:"How does payment work?",
      a:"Every project starts with a 50% deposit; the remainder is split across agreed milestones and only invoiced after you approve each deliverable. Training programs are paid upfront per batch or program."
  },
    {
        q:'Can the scope or timeline change mid-project?',
     a: "Yes — we work milestone-first precisely for that. Scope changes are quoted as a written change request before any work starts, so there are never surprise costs."
   },
	{
      q: "Who owns the code and design after delivery?",
      a:"You do — 100%. Full source code, design files, and documentation are handed over at launch, plus a walkthrough session for your team."
  },
  {
      q:'What if I need support after launch?',
	   a: 'Every package includes a 30-day post-launch support window. After that, you can continue with an optional monthly care plan — or run the product yourself with the handover docs.'
    }
];

var svcs =[
    {
  	id: 'company-website',
     category: "web",
  	categoryName: 'Web Development',

     icon:"globe",
    name:"Company Profile Website",

     tagline: "A fast, elegant website that tells your brand story and turns visitors into leads — with a CMS your team can actually use.",
    desc: [
   	   "Your website is often the first handshake with a customer. We design and build company profile websites that load in under two seconds, look sharp on every device, and communicate what makes your business different — clearly and confidently.",

      "Everything is handed over on a friendly CMS, so your team can update text, images, and pages without touching code. Want to start small and grow later? The structure is built to scale with you."
    	],
     includes: [
        "Custom UI design (no templates)",

          "Up to 12 content pages",
      	"Mobile-first responsive build",
   	  "CMS for self-serve editing" ,
       	"On-page SEO fundamentals",
         "Contact & WhatsApp integration",
        "Google Analytics setup",
		  "30-day post-launch support"
       ],
    packages:[
	      {
              name:"Essential",
			   blurb: 'Personal brands & small teams',
            price:7500000,
              note:'per project · 2–3 weeks' ,
     	  popular:false,
    	    features: [
	            {
             t:"Up to 5 pages (Home, About, Services, Portfolio, Contact)"
        	  },

           	  {t:"Custom design from a Flexoo UI designer"},
   		     {t:"Mobile-first responsive build"},

              {
  	    	  t:"Contact form + WhatsApp button"
       	        },

   	        {
               	  t: '1 revision round'
         	  }
      	   ]
   	    },
          {
  	    name: "Professional",
            blurb:"Growing companies that need a CMS",
		       price:14000000,
      	    note:'per project · 3–4 weeks',
				popular:true,
     	    features:[
     		   {t: "Up to 12 pages with custom illustrations"},
             {t: "CMS — edit content without a developer"},

              {t: "Blog / news section with editor"},
            {
         	     t: "On-page SEO + Analytics dashboard"
        		} ,
	         {t: "3 revision rounds"},
               {
               t:"30-day post-launch support"
            }
        ]
        },
	      {
        	name:"Enterprise",
	          blurb: 'Bilingual, SEO-serious organizations',
		  	price: 26000000,
          note:"per project · 4–6 weeks",
        	popular:false,
            features: [
	              {t: 'Unlimited pages & navigation structures'},
	    	    {t:"Bilingual ID / EN with language switcher"},
           	{t:"Advanced SEO: schema, sitemap, Core Web Vitals"},
              {t:"CMS training session for your team"},
        			{
       			t:'5 revision rounds'
  	   	   },
               {t: "90-day priority support"}
            ]
      }
		],
        addons:[
	  	{
   			name: 'UI/UX research sprint',

      	  desc:"User interviews + competitor teardown before design",
	        price:8000000
     	},
       {
            name: "Content & data migration",
    	  desc:"We move your existing content over, formatted",
               price: 4500000
	     },

         {
          name: '3-month care plan',

  	    desc: 'Updates, backups, and small edits handled for you',

  	      price:6000000
         }
    ],
      stack: [
	        "Next.js",
      	'Tailwind CSS',
		  "Vercel"
  	],
	  team: "4–5 members" ,
        revisions: "1–5 rounds",
     delivery: "2–6 weeks",
      rating:4.9,

   	reviews:37,
      process:"dev"
	},
  {
     id:"ecommerce",
      category:"web",
     categoryName: "Web Development",
     icon:'cart',
   	name: "E-Commerce Platform" ,
     tagline: 'A secure storefront with catalog, cart, payment gateway, and an admin dashboard that lets you run the shop without a developer.',

	  desc:[
   	  "Sell online without being held hostage by your own platform. We build e-commerce experiences with fast product pages, a frictionless checkout, and local payment methods your customers actually use — QRIS, virtual accounts, e-wallets, and cards." ,
         "Behind the scenes, you get an admin dashboard for products, stock, orders, and promos, plus shipping integrations for Indonesian couriers. Weekly demos mean you shop your own store before it ever goes live.",
    	    "Default showcase: the Growth package — our most-ordered setup for SMEs going serious about online sales."
    ],
		includes:[

        "Custom storefront UI design",
	      "Product catalog with variants",
    		"Cart & guest checkout flow",

         "Payment gateway (QRIS, VA, e-wallet)",
   	    'Shipping aggregator integration',
          "Admin dashboard & order management",
  	    "Discount & promo engine" ,

          "30-day post-launch support"
   	],
    packages:[

	    	{
		    name:"Launch",
        	blurb:"Get selling fast, refine later",
       	    price:45000000,
          note:'per project · 6–8 weeks',
    	     popular:false ,

         	features:[
    	     {
		            t:'Catalog up to 500 SKUs with variants'
            	},

         	{

	           	t: "Checkout with one local payment method"
               },
             {
               t: 'Flat-rate shipping rules'
         	  },
  	        {t: "Basic admin dashboard"},
                {
                 	t:"2 revision rounds"
  	        }
          ]
       	},
	      {
           name:"Growth",
       	blurb: 'The full SME selling machine',
     	    price:65000000,
          note:'per project · 8–10 weeks' ,
  	     popular: true,
      	  features:[
                {
                   t:'Unlimited SKUs + bulk CSV import'
  	       } ,
                  {t:"QRIS, VA, e-wallet & card payments"},
        	  {t:"Shipping aggregator with auto waybill"},
            {t: "Promo engine: coupons, bundles, flash sale"} ,

	    	   {
                  t: "Sales analytics dashboard"
                 },
           {t: '3 revision rounds'}
            ]
        },
      {
           name: "Scale",
	          blurb: 'High-volume & multi-channel',
     	   price:95000000,
	    		note: "per project · 10–14 weeks",
        	popular: false,
	         features: [
             {t:"Everything in Growth"},
  	    	  {
            	t: "Multi-warehouse stock logic"
             },
          	   {t:"Marketplace sync (Shopee/Tokopedia-ready)"},
            	{
              t: 'Loyalty points & member tiers'
              },
		       {t:'Load testing to 10k concurrent users'},
    	  	{
	         	    t: "90-day priority support"
           }
           ]
			}
    ],
        addons: [
  	  {
	          name:"UI/UX research sprint",
          desc:'Checkout-usability study with real shoppers',
   	  	price:8000000
      },
      {
	          name:"Product data migration",
  	    desc:"Up to 500 products imported & formatted",
           price:7500000
	    } ,
  	  {
  	      name: "3-month growth care",
          desc: "CRO tweaks, promos setup, monthly health report" ,
      		price: 9000000
          }
      ] ,

        stack: ["Next.js",'PostgreSQL','Midtrans / Xendit'] ,
       team: "6–8 members",
     revisions: "2–3 rounds",
      delivery:"6–14 weeks",
  	rating:4.8,
  	reviews: 21,
      process: 'dev'
  },
  {
        id: "custom-web",
   	category: "web",
       categoryName:"Web Development",
	   icon:'code',
    name:"Custom Web Application",
     tagline: 'Bespoke systems — booking engines, ERP dashboards, internal tools — engineered around your exact workflow and data.' ,
	  desc:[
       	"When off-the-shelf software fights your workflow instead of fitting it, a custom web application pays for itself. We analyze how your team actually works, then design a system that encodes that process — approvals, role-based access, audit trails, integrations and all.",
         "Built on a modern stack with automated tests and CI/CD from day one, so it stays maintainable long after launch. You get the architecture documented and the code owned by you."
    ] ,

  	includes:[
       "Workflow & requirements analysis",
         'System architecture design',
       "Role-based access control",
          'REST / GraphQL API layer' ,

	    "Automated test suite",
            "CI/CD pipeline setup" ,
	      "Admin & reporting dashboards",
    	"Architecture handover docs"
	  ],
      packages:[
      {
          name: "Starter System",
         	blurb:"One core workflow, automated",

   		   price: 60000000,
		     note: "per project · 8–10 weeks",
             popular:false,
    	    features: [
               {
	              	t:"Up to 3 user roles & permissions"
            },
	      	{t: "One core module end-to-end"},
               {t:"Reporting dashboard with CSV export"},

   		    {t: "2 revision rounds"}
   		   ]
	     },
        	{
  	     name: "Business System",
      		blurb:"Multi-module operations",
	          price: 95000000,
    		note:"per project · 10–14 weeks",

          popular:true,
   	      features: [
               {t: "Up to 6 modules (e.g. inventory, HR, finance)"},
      		    {t: "Granular RBAC + audit trail"},
            	{t: "Integration with 2 external services"},
            {t: 'Automated test suite & CI/CD'},
      	     {
             	  t: "3 revision rounds"
	      	}
	       ]
    	  },
         {
         name: "Enterprise Platform" ,
       	blurb:"Mission-critical at scale",

  	      price:150000000 ,
          note: 'per project · 14–20 weeks',
              popular:false,
      	  features: [
      	  {t:'Unlimited modules & microservice split'},
    	  	{t: 'SSO / SAML integration'},
  	    		{t: 'On-premise or VPC deployment option'},
      	     {t:"Load testing & security audit"},
	     	  {t: 'Staff training + 90-day support'}
        ]
	  	}
	  ],
		addons: [

   	  {

	         name: "Legacy system audit",
    	    desc: 'We map your current system before building',
		     price:6000000
	      } ,
      {
		     name: "UI/UX design sprint",
              desc: "Research + hi-fi prototypes for key screens",
   	     price:8000000
  	   },
        	{
		      name:"Staff training program",
           desc:"Hands-on sessions for admins & end users" ,
          price:5000000
        }
	  ],
    stack: ["React",'Node.js',"PostgreSQL"],
     team:"8–10 members",
      revisions:"2–3 rounds",
     delivery: "8–20 weeks",
       rating:4.9,

	  reviews: 18 ,
	    process: 'dev'
  },
    {
    id:'mobile-app' ,
       category:"mobile",

       categoryName:'Mobile Apps',
    icon: "smartphone",
    name:'Cross-Platform Mobile App',
      tagline:"One codebase, both stores. Flutter apps with native performance, clean architecture, and a smooth release pipeline.",
      desc: [
      "Reach both Android and iOS users without doubling your budget. We build cross-platform apps in Flutter that feel native — smooth 60fps interactions, platform-consistent widgets, and offline-first data where it matters.",
          "From authentication and push notifications to store submission, the whole pipeline is automated: you approve a release, and TestFlight / Play Console builds roll out. Post-launch, crash reports land in our dashboard, not in your users' complaints."
		],
       includes:[

	    "App UX/UI design (light & dark)",

       	"Flutter app for Android + iOS",
        'Authentication (email, Google, Apple)',
   		"Push notifications setup",
         'Offline-first local storage',
	      'Backend API & database',
          "Store submission (Play & App Store)" ,
        'Crash reporting & analytics'
      ],
      packages: [
     	{
	   		name: "Core App",
          blurb:'The essential features, done well',
   	        price:55000000,
  			note: "per app · 8–10 weeks",
          	popular:false ,
	         features:[
     	       {t: 'Up to 8 screens'},
     	  	{
        	        t:"Authentication + user profiles"
           	} ,
    	        {t:'REST API backend included'},
             {
	             t:"Both stores submission handled"
  			    },
                 {
                	t:"2 revision rounds"
            }
          	]
       },
           {
      	   name:"Complete App",
	   	  blurb:"Polished, connected, ready to grow",
	         price:85000000,
            note:'per app · 10–12 weeks',
			  popular:true,
    	    features: [
		        {
     	     	t:"Up to 15 screens with custom animations"
          	},
               {t: "Push notifications & deep links"},
	            {t:"Offline-first sync architecture"},
	         {t:"Admin web panel included"},
	           {t: "Crash reporting & analytics"},
            {
			        t: "3 revision rounds"
      	       }
	  	  ]
          },
         {
	         name: "Flagship App" ,
            blurb:"Consumer-grade polish at scale",
         	price:130000000,
	        note:"per app · 12–16 weeks",
	     	popular: false,
    			features: [

	          {t:"Everything in Complete"},
          	{t:"Design system & white-label theming"},
             {t: 'Realtime features (chat, tracking)'},
        		{
                  t: 'Performance profiling & load tests'
	          },

		        {

               	t:"90-day priority support SLA"
  	        }
            ]
  	  }
      ] ,
      addons:[

          {
         	name:"UI/UX design sprint",
             desc:'Research + clickable prototype before build',
       	  price: 8000000
      	},
       {

           name: "App Store optimization",

      	  desc:"Keywords, screenshots, and listing copy",
	     	price: 4000000
	     },
       	{
	       name:'3-month maintenance',
          desc: "OS updates, bug fixes, small features",
	          price:9000000
      }
		],

    stack:['Flutter','Firebase',"REST / GraphQL"],

  	team:"6–8 members",
	    revisions: '2–3 rounds',
     delivery: "8–16 weeks",
      rating: 4.8,
       reviews: 15,
        process:"dev"
	},
    {
      id: 'mvp-sprint',
     category:"mobile",
  	categoryName:'Mobile Apps',
      icon: 'zap',
    	name:'MVP Sprint',
    tagline: 'Validate your idea fast — a market-ready MVP with the must-have features only, shipped in one focused sprint.',

    	desc: [

	      'The best way to test a startup idea is to put a real product in real hands. In one focused sprint we cut your vision to the 20% of features that prove the concept, then build and ship it — usually in 4 to 6 weeks.',
	   	"You leave with a live app on both stores, an analytics dashboard showing what users actually do, and a clear data-driven decision: pivot, persevere, or invest in the full build."
     ],
       includes:[
        "Feature-scoping workshop",

	     "Lean UX wireframes",
        "Core feature build (Flutter)",

        "Basic backend & database" ,

        "Analytics events setup",
       	'Both stores submission',

      '2-week post-launch tuning'
	  ] ,
	  packages:[
        {
		  	name: "Micro MVP",
	  	    blurb:'One job-to-be-done, perfectly' ,
         price:35000000,
   		   note:"per sprint · 4 weeks",
       	  popular: false,
       	features: [
                {t:"Up to 5 screens"},
	    	    {t:"One core user flow end-to-end"},
       	    {t: "Simple backend included"},
             {
               t:"Both stores submission"
    			   },
       	   {
	      	   t: '1 revision round'
        		  }
           ]
  	  },
         {
      	    name: "Startup MVP",

               blurb:"Investor-demo ready",
         price:55000000,
        	note:"per sprint · 6 weeks",

      	popular: true,
    	     features: [
	            {t:'Up to 9 screens with polished UI'} ,
               {
            	t:"Auth, onboarding & core loop"
   	      	},
             {
           	    	t: "Analytics funnel tracking"
          	   } ,
   	      	{t:'Admin panel for content'},
  	       {
     	         t:'2 revision rounds'
             }
	        ]
	    },
    	{

           name:"Funded MVP",
   	      blurb: "Pre-scaling foundation",
            price: 75000000,
	        note: "per sprint · 8 weeks",
        popular: false,
	        features: [
             {t: "Everything in Startup"},
	     		{t:"Payments or subscriptions wired"},

               {t:"Scalable architecture from day one"},
           {
	        	  t:'Investor metrics dashboard'
		          },
	         {
  	          t:"3 revision rounds"
    		    	}
	        ]
           }
      ],
     addons:[
          {
	         name:'Design system setup' ,
	       desc: 'Reusable components for the full build later',
        price:5000000
	  	},
        {
             name: "Analytics deep setup",
	       desc: "Custom events, funnels & retention views",
      	   price: 3000000
      } ,
      {
    			name:"Pitch deck design",

         desc: "10-slide deck matching your app's look",
           price:2500000
		  }
      ],
    stack: ['Flutter',"Supabase","Rapid UI kit"],
    team:'4–5 members',
    revisions:"1–3 rounds",
      delivery: "4–8 weeks",
      rating:4.9,
	  reviews: 12,
       process: "dev"
  },
  {

  	id:"app-care",
      category:'mobile',

       categoryName:'Mobile Apps',
    icon: 'rotate' ,
   	name: "App Care & Optimization",
      tagline: "Performance audits, refactors, and feature upgrades for your existing app — measurable speed gains, fewer crashes.",
	    desc:[

      	"An app that freezes on the loading screen quietly deletes users every day. Our engineers profile your existing Flutter or React Native app, find the real bottlenecks — not the guessed ones — and fix them with measurable before/after numbers.",
	     "Beyond performance, we take over maintenance: OS updates, dependency upgrades, crash triage, and the small features your users keep asking for."
	    ],

	  includes: [
          'Full technical & UX audit',
  	    'Performance profiling report',
      	"Crash & ANR root-cause fixes",
       	"Dependency & OS-version updates",
        'Store listing health check',
        "Before/after metrics report"
      ],
        packages: [
		  {
		  	name:"Audit",

		    blurb: "Know exactly what's wrong",
	  	  price:20000000,
         note:'one-time · 2 weeks',

              popular:false,
             features:[
           {t: 'Technical debt & architecture review'},
        	{t:'Performance profiling (jank, memory)'},
               {t:"Prioritized fix roadmap"},
                {t: "Findings walkthrough session"}
  	     ]
       },
       {
           name:"Optimize",
    	      blurb:"Fix the top pain points",
              price:35000000,
     		note:"per cycle · 3–4 weeks",
	     	popular: true ,
        	features: [
          {t:"Audit included"},
              {t:"Top-10 issues fixed & verified"},
               {t: "Startup time & jank improvements"},
        	  {t: "Store update shipped"},
            	{t: "Before/after metrics report"}
          ]
  	  },
   		{
           name:'Care Plan',
        	blurb:"Your outsourced mobile team",
     	   price:55000000,
          note: "per quarter · ongoing",
			  popular: false,
   	    	features:[
              	{
	      	      t: "Everything in Optimize"
               },
             {t:"Monthly OS & dependency updates"},
	         {t:"Crash triage with 48h SLA"},

    	      {t: "1 small feature per month"},
  	    	  {
                 t: 'Quarterly strategy review'
                }
		    ]
        }
	   ],
       addons: [
          {
             name: "Store listing refresh",
        desc: "New screenshots, keywords & copy",

       		price:3000000
      } ,
	    {

     	   name:'Crash analytics setup',
           desc: "Sentry / Crashlytics properly wired",
         price: 2500000
         },
        {name: 'Feature sprint add-on', desc: "One new feature, sprint-priced", price: 12000000}
     ] ,
  	stack:['Flutter / React Native',"Sentry","Crashlytics"],
    	team:'3–4 members',

	  revisions:"Included",
     delivery: '2–4 weeks',
  	rating:4.7,
    reviews:9,

     process:'dev'
  },
    {

    	id:'bootcamp',
   	category:'training',
      categoryName: "IT Training",
  	icon: "cap",
	    name: "IT Bootcamp",
	  tagline:"Immersive programs in web, mobile, or data — a structured curriculum crafted and mentored live by our working engineers.",
      desc: [
          "Flexoo bootcamps are taught by students who ship production software every week — so you learn the current stack, current tools, and current best practices, not a syllabus from five years ago. Tracks cover Full-Stack Web, Mobile Development, and Data Analytics.",

        "Expect small cohorts, live mentoring, and a capstone project that goes on your portfolio. Graduates leave with working code on GitHub, a deployed project, and a certificate that carries weight with our hiring partners.",
     	"Default showcase: the Full-Stack Web track — our most popular program."
	  ] ,
     includes:[
  	    "Live sessions with working engineers" ,

        "Small cohort (max 20 people)",
        	"Hands-on labs every session",
       "Capstone portfolio project" ,
	     'Code reviews on your work',

   	  "Verified certificate of completion",
		   "Alumni community access",
      "Career & portfolio guidance"
    ],
       packages: [
      {
        	name: "Weekend Track",
            blurb:"8 sessions · Sat–Sun mornings" ,
             price:3500000,
   	      note:"per person · 4 weeks",
	           popular: false,
		  	features:[
            {
                  t: "8 live sessions (16 contact hours)"
	      	    },
	      	  {
      	        t: "Recordings available for review"
    		     },
                {t: "Guided labs with solutions"} ,
                	{t:"Certificate of completion"}
			    ]
          },

    	{
          name: "Intensive Track",
        blurb: 'Full program + capstone',
            price: 6500000,
      	note:"per person · 8 weeks" ,
  	     popular:true,
        features: [
      	  {
	           	t: "24 live sessions (48 contact hours)"
           	},
                 {t:'Capstone project with code review'},
	         {t: "1-on-1 mentor session weekly"},
   	       {t: 'Portfolio & career guidance'},
               {t: "Priority alumni network access"}
     	  ]
        },
     	{
          name: "Corporate Cohort" ,
      	blurb: 'Private batch for your team',
        price: 35000000,
              note:"per batch (max 20) · 8 weeks" ,
             popular: false,
   	    	features: [

              {
               t: "Everything in Intensive, private batch"
       	     },

        	   {t: 'Curriculum tuned to your stack'},

        	    {
          	    t:"Team progress reports for managers"
  	    	    },
             	{
    	        t: "On-site or hybrid options (Surabaya)"
               }
	  	  ]
	      }
  	],

      addons:[
	    {
          name:"1-on-1 coaching hours",

	       desc: "4 extra private sessions with your mentor" ,

    	    price: 2500000
          },
           {
  	      name:"Certification exam",
      	  desc:"Practical exam + verified credential",
	       	price:1000000
	    },
  	   {
       	name: 'Extended project review' ,
      	desc: '2 weeks of capstone feedback after the bootcamp',

          price: 1500000
    		}
    ],
     stack:["Full-Stack Web",'Mobile Dev',"Data Analytics"] ,
     team:"Lead + 2 mentors" ,
     revisions:'N/A',
		delivery:'4–8 weeks',
		rating:5,
      reviews:46,
        process: "training"
   },

   {
    	id:"mentoring",
  	category: "training",
    	categoryName: "IT Training",
    icon:"message",
  	name: 'Private Mentoring',
	  tagline: '1-on-1 sessions on coding, architecture, or your career roadmap — with senior student engineers who ship real products.',
  	desc:[

    		"Sometimes you don't need a course — you need a person. Someone who reads your code, hears your goals, and tells you the truth about what to learn next. Flexoo mentors are senior student engineers who build production software daily.",
			"Book single sessions or a monthly plan. Typical journeys: cracking your first internship, finishing a stuck final project, learning a new stack with accountability, or preparing for technical interviews."
       ],
     includes: [

  	  "Pre-session goal form" ,
      	"90-minute focused session" ,
          'Screen-share pair programming',
         "Written session summary & action items",
	       "Resource list curated for your goal",
        "WhatsApp follow-up within the week"
	    ],

      packages: [
         {
  	     name:"Single Session",
           blurb: 'Try it, solve one blocker',
         price: 750000 ,
  	    	note: "per session · 90 minutes",
             popular: false,

	        features:[
              {t: "One 90-minute 1-on-1 session"},
              	{t:"Session summary & action items"} ,
                 {t: "Curated resource list"}
           ]
    	},
       {
	         name: 'Monthly Plan' ,
             blurb: '4 sessions + async support',
          price: 2700000,
        	note:'per month · 4 sessions',
          popular: true,
           features:[
                 {t: "Four 90-minute sessions"},
       		{t:'Personalized learning roadmap'},
	  	    {t:'Async code review between sessions'},
  	         {t:"Priority scheduling"}
            ]
   	    },
    	  {
    	       name: "Career Sprint",
       	    blurb:"Interview & portfolio intensive",
   	    	price: 5000000,
  	  	note:"6 sessions · portfolio + mock interviews",
	   	    popular:false ,
            features:[
               {
                   t:"Six sessions over 3 weeks"
         	},
    	   		{t:"Portfolio & GitHub profile overhaul"},
                {
          	     t: "2 mock technical interviews"
               },
          {t:"CV & LinkedIn review"},

		         {
         	   t:"Referral to our hiring network"
          	    }
            ]
        }
      ] ,
     addons:[
       {
         	name:'Session recording',
  		  desc:"Full recording of your session to keep",
  	     price:250000
      	},

      	{
  	      name:'Personalized roadmap',
             desc: "12-week study plan, revised monthly",
      	   price: 500000
	    },
      {
    	  name:'Code review pack',
          desc: '5 repositories reviewed with written feedback',
	   		price: 1200000
	        }
    ],
       stack: [
         'Web',
      	"Mobile",
    	"Career prep"
     ] ,

    	team: '1 senior mentor',

    revisions:'N/A',

	   delivery: '90 min / session',
	   rating: 4.9,
    reviews: 58,
      process:"training"
   },
    {

    id:"workshop",
  	category: "training",
        categoryName: "IT Training",
      icon: "users",
      name: "Corporate Workshop",
	  tagline: "Hands-on tech workshops for teams — from Git fundamentals to applied AI — tailored to your stack and skill gaps.",
        desc:[
	       "Level up a whole team in days, not months. Our facilitators run hands-on workshops — laptops open, real tasks — on topics from Git & CI/CD hygiene to practical LLM integration. No death-by-slides: 70% of every session is doing.",
        "We start from a skill-gap assessment with your leads, then tailor modules, examples, and exercises to your actual codebase and tooling. Post-workshop, managers get a per-participant progress report."
     ],

  	includes: [

        "Pre-workshop skill-gap survey" ,
          "Tailored module & exercise design",
    	    'Full-day hands-on facilitation' ,
     	"All materials & sample repos",
  		"Per-participant progress report" ,
        '30-day post-workshop Q&A group'
	    ] ,
     packages: [
         {
  	     name:"Half-Day",
      	  blurb: 'One focused topic',
	     	price:15000000,
	        note: "per batch (max 15) · 4 hours",
           popular: false,
   	      features:[
            {
    	         t: "4 workshop hours, one topic"
       	  } ,

    	      {t:"Hands-on labs on your tooling"} ,
  	    	  {t:"Materials & sample repo"},
            {t:"Progress report for managers"}
      	   ]
          },
	      {

		       name: "Full-Day",
         blurb: 'Deep dive with a mini project',
             price: 24000000,
      	   note: "per batch (max 15) · 8 hours",
    			popular:true,

      	   features:[
  	      	{
       			t:'8 workshop hours, morning + afternoon'
               },
              {t:"Team mini-project with demo"},
      	     {t: "Post-workshop Q&A group (30 days)"},
            	{t:"Optional on-site in Surabaya"}
       	    ]
       	},

    		{
          name:"Multi-Day Camp",
   	     blurb: "Transform the whole department",
           price: 45000000,
      	note:"per batch (max 15) · 2–3 days",
	        popular:false,
             features: [
	          {
        	    	t: '2–3 full days, multi-track'
        	  } ,
            {t: "Capstone tied to a real company project"},
              {
                    t: 'Skills assessment before & after'
               },
           	{t:"Executive summary for leadership"}
              ]
           }
       ],
      addons:[
   		{
           name:"Custom module design",
   	      desc:"We build a module for your exact stack",
       	price:5000000
	      } ,

	     {

  	     name:"Post-camp Q&A month" ,
   	  	desc: "Extended async support for participants",
             price:3000000
	  	},

	  	{
             name: "Team assessment report",
           desc:"Individual skill matrices for managers" ,
  	    price:2500000
         }
    ],
    	stack:["Git & CI/CD","Cloud Basics","Applied AI"],
      team: "2 facilitators",
      revisions: "N/A" ,
    delivery: "1–3 days",
    rating:4.8,
      reviews:11,
     process: "training"
	}
];

function rp_fmt(n){
	var temp_val=Number(n).toLocaleString("id-ID")
    return "Rp "+temp_val
}
