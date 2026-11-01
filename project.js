
const projectSlug = new URLSearchParams(window.location.search).get("project");
let project = null;

if (projectSlug === "sentinel-kidz") {
	project = {
		name: "Sentinel Kidz",
		number: "01 / 08",
		image: "assets/projects/2.PNG",
		alt: "Sentinel Kidz logo",
		category: "PARENT-CONTROLLED WEBSITE",
		type: "Parent-controlled website",
		audience: "Parents and guardians",
		focus: "Safer online experiences for children",
		overviewTitle: "A parent-controlled space for kids.",
		overview: "Sentinel Kidz is a parent-controlled website designed to help guardians manage and support a safer online experience for children.",
		focusIntro: "The experience centers on parental oversight while keeping the product approachable for families.",
		points: [
			["01 / GUARDIANS", "Parent controls", "Give parents a clear place to guide and manage their child's online experience."],
			["02 / CHILDREN", "Kid-focused access", "Keep the experience centered on children and the needs of the family."],
			["03 / TRUST", "Clear oversight", "Present important controls and information in a way guardians can understand."],
		],
		scope: ["Parental controls", "Family safety", "Child-focused experience"],
	};
} else if (projectSlug === "jayak-hub") {
	project = {
		name: "Jayak Hub",
		number: "02 / 08",
		image: "assets/projects/3.PNG",
		alt: "Jayak Hub logo",
		category: "WEB PLATFORM",
		type: "Responsive web platform",
		audience: "Platform visitors",
		focus: "Clear presentation and navigation",
		overviewTitle: "A focused home for the platform.",
		overview: "Jayak Hub is a responsive web platform built to present its services through a clear interface and straightforward navigation.",
		focusIntro: "The case study focuses on making the platform easy to understand and browse across screen sizes.",
		points: [
			["01 / STRUCTURE", "Clear hierarchy", "Organize platform information so visitors can quickly understand what is offered."],
			["02 / NAVIGATION", "Easy to explore", "Keep the path through the site's main content simple and direct."],
			["03 / RESPONSIVE", "Flexible layouts", "Support comfortable browsing across desktop and mobile screens."],
		],
		scope: ["Web platform", "Responsive UI", "Information structure"],
	};
} else if (projectSlug === "roos-brothers") {
	project = {
		name: "Roos Brothers",
		number: "03 / 08",
		image: "assets/projects/4.PNG",
		alt: "Roos Brothers logo",
		category: "E-COMMERCE STORE",
		type: "E-commerce store",
		audience: "Online shoppers",
		focus: "Product discovery and purchase journey",
		overviewTitle: "A storefront made for product discovery.",
		overview: "Roos Brothers is an e-commerce store focused on presenting products clearly and guiding shoppers from browsing toward purchase.",
		focusIntro: "The shopping experience brings the brand, product information, and browsing flow together.",
		points: [
			["01 / CATALOG", "Browse products", "Give shoppers a clear way to scan and explore the available products."],
			["02 / BRAND", "Consistent storefront", "Keep the brand presentation connected across the shopping experience."],
			["03 / SHOPPING", "Purchase flow", "Make the steps from product discovery to purchase easy to follow."],
		],
		scope: ["E-commerce", "Product catalog", "Shopping experience"],
	};
} else if (projectSlug === "albasync") {
	project = {
		name: "Albasync",
		number: "04 / 08",
		image: "assets/projects/Albasync.jpg",
		alt: "Albasync property portal logo",
		category: "REAL ESTATE / PROPERTY",
		type: "Property portal",
		audience: "Property seekers and realtors",
		focus: "Property discovery and realtor services",
		overviewTitle: "A clearer way to explore property.",
		overview: "Albasync is a real-estate property website for exploring listings and connecting property seekers with realtor services.",
		focusIntro: "The interface is organized around making property information and realtor services easier to find.",
		points: [
			["01 / DISCOVERY", "Explore properties", "Present property listings in a way that supports browsing and comparison."],
			["02 / INFORMATION", "Property details", "Make the important information about each property easy to scan."],
			["03 / CONNECTION", "Realtor services", "Connect the property experience with the people who help visitors take the next step."],
		],
		scope: ["Real estate", "Property listings", "Realtor services"],
	};
} else if (projectSlug === "ultimate-learning") {
	project = {
		name: "Ultimate Learning",
		number: "05 / 08",
		image: "assets/projects/Ultimate-Learning.jpg",
		alt: "Ultimate Learning logo",
		category: "LEARNING MANAGEMENT SYSTEM",
		type: "Learning management system",
		audience: "Learners and course teams",
		focus: "Course organization and learning journey",
		overviewTitle: "A structured home for online learning.",
		overview: "Ultimate Learning is an LMS for organizing online courses, learning material, and the student learning journey.",
		focusIntro: "The experience brings course content and the learner's path through it into one organized environment.",
		points: [
			["01 / COURSES", "Course structure", "Organize learning material into courses that are easier to navigate."],
			["02 / LEARNERS", "Learning journey", "Help learners understand where they are and what to explore next."],
			["03 / CONTENT", "Accessible material", "Present course resources in a clear, consistent format."],
		],
		scope: ["Learning management", "Online courses", "Student experience"],
	};
} else if (projectSlug === "altix") {
	project = {
		name: "Altix",
		number: "06 / 08",
		image: "assets/projects/Altix.jpg",
		alt: "Altix token marketplace logo",
		category: "TOKEN MARKETPLACE",
		type: "Token marketplace website",
		audience: "Token buyers and sellers",
		focus: "Token discovery and buy-and-sell flow",
		overviewTitle: "A marketplace for token discovery.",
		overview: "Altix is a token marketplace website focused on helping visitors discover tokens and understand the buy-and-sell journey.",
		focusIntro: "The interface gives token information and the marketplace journey a clear, focused presentation.",
		points: [
			["01 / DISCOVERY", "Explore tokens", "Help visitors scan token information and find what they are looking for."],
			["02 / INFORMATION", "Readable details", "Present marketplace information in a clear, easy-to-follow layout."],
			["03 / MARKETPLACE", "Buy and sell flow", "Make the intended steps in the token marketplace journey easy to understand."],
		],
		scope: ["Token marketplace", "Token discovery", "Buy-and-sell journey"],
	};
} else if (projectSlug === "gulf-south") {
	project = {
		name: "Gulf South",
		number: "07 / 08",
		image: "assets/projects/C1.PNG",
		alt: "Gulf South website logo",
		category: "BUSINESS WEBSITE",
		type: "Business website",
		audience: "Customers and website visitors",
		focus: "Brand presentation and clear information",
		overviewTitle: "A clear digital home for Gulf South.",
		overview: "Gulf South is a business website shaped around the brand, clear information, and a responsive browsing experience.",
		focusIntro: "The website gives the Gulf South identity a straightforward place to present its information online.",
		points: [
			["01 / BRAND", "Consistent identity", "Carry the Gulf South brand through the site's key pages and content."],
			["02 / CONTENT", "Clear information", "Help visitors find and understand the information they came for."],
			["03 / RESPONSIVE", "Comfortable browsing", "Keep the website usable across desktop and mobile screens."],
		],
		scope: ["Business website", "Brand experience", "Responsive UI"],
	};
} else if (projectSlug === "gulf-south-saunas") {
	project = {
		name: "Gulf South Saunas",
		number: "08 / 08",
		image: "assets/projects/C2.PNG",
		alt: "Gulf South Saunas luxury furniture website logo",
		category: "LUXURY FURNITURE WEBSITE",
		type: "Luxury furniture website",
		audience: "Luxury product shoppers",
		focus: "Premium product presentation",
		overviewTitle: "A considered showcase for luxury products.",
		overview: "Gulf South Saunas is a luxury furniture website that presents premium products with clear details and an elevated browsing experience.",
		focusIntro: "The experience puts product presentation and useful details at the center of the browsing journey.",
		points: [
			["01 / PRESENTATION", "Premium feel", "Give luxury products a clean, considered visual presentation."],
			["02 / PRODUCTS", "Useful details", "Help shoppers understand the products through clear supporting information."],
			["03 / BROWSING", "Easy exploration", "Make it comfortable to explore the product range across screen sizes."],
		],
		scope: ["Luxury furniture", "Product showcase", "Responsive website"],
	};
} else {
	window.location.replace("index.html#projects");
}

if (project) {
	const setText = (id, value) => {
		document.getElementById(id).textContent = value;
	};

	setText("project-name", project.name);
	setText("project-number", project.number);
	setText("preview-category", project.category);
	setText("project-overview-title", project.overviewTitle);
	setText("project-overview", project.overview);
	setText("project-type", project.type);
	setText("project-audience", project.audience);
	setText("project-focus", project.focus);
	setText("project-focus-intro", project.focusIntro);

	const preview = document.getElementById("project-preview");
	preview.src = project.image;
	preview.alt = project.alt;

	project.points.forEach((point, index) => {
		const number = index + 1;
		setText(`project-focus-label-${number}`, point[0]);
		setText(`project-focus-title-${number}`, point[1]);
		setText(`project-focus-copy-${number}`, point[2]);
	});

	const scope = document.getElementById("project-scope");
	project.scope.forEach(label => {
		const tag = document.createElement("span");
		tag.textContent = label;
		scope.append(tag);
	});

	document.title = `${project.name} | Shahzaib Ahmed`;
}
