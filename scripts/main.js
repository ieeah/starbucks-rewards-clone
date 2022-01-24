const app = new Vue({
	el: '#app',
	data: {
		pages: [
			{
				page: 'menu',
				url: '/menu',
			},
			{
				page: 'rewards',
				url: '/',
			},
			{
				page: 'gift cards',
				url: '/gift',
			},
		],
		activePage: 1,
		activeFAQ: null,
		starInput: '',
		codeOk: null,
		mobileMenu: false,
		screenWidth: window.innerWidth,
		carousel: [
			{
				points: 25,
				img: 'assets/reward products/025.png',
				title: 'Customize your drink',
				text: 'Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup.',
			},
			{
				points: 50,
				img: 
				'assets/reward products/050.png',
				title: 'Brewed hot coffee, bakery item or hot tea',
				text: 'Pair coffee cake or an almond croissant with your fresh cup of hot brew.',
			},
			{
				points: 150,
				img: 'assets/reward products/150.png',
				title: 'Handcrafted drink, hot breakfast or parfait',
				text: 'Have a really good morning with a breakfast sandwich, oatmeal or your favorite drink.',
			},
			{
				points: 200,
				img: 'assets/reward products/200.png',
				title: 'Salad, sandwich or protein box',
				text: 'Nourish your day with a hearty Chipotle Chicken Wrap or Eggs & Cheese Protein Box.',
			},
			{
				points: 400,
				img: 'assets/reward products/400.png',
				title: 'Select merchandise or at-home coffee',
				text: 'Take home a signature cup, a bag of coffee or your choice of select coffee accessories.',
			},
		],
		active_carousel: 0,
		earnings: [
			{
				level: '1',
				subtitle: 'Pay as you go',
				details: [
					{
						image: './assets/earning/1A.png',
						title: 'Scan and pay separately',
						text: 'Use cash or credit/debit card at the register',
					},
					{
						image: './assets/earning/1B.png',
						title: 'Save payment in the app',
						text: 'Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.',
					},
				],
				
			},
			{
				level: '2',
				subtitle: 'Pay as you go',
				details: [
					{
						image: './assets/earning/2A.png',
						title: 'Preload',
						text: 'To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.',
					},
					{
						image: './assets/earning/2B.png',
						title: 'Register your gift card',
						text: 'Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.',
					},
				],
				
			},
			{
				level: 'Up to 3',
				subtitle: 'Pay as you go',
				details: [
					{
						image: './assets/earning/3A.png',
						title: 'Earn Stars even faster',
						text: 'Earn Stars on all purchases you make with our ',
						link: 'https://www.starbucks.com/starbucks-rewards/credit-card',
						link_text: 'credit card',
						text2: 'in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.',
					},
				],
				
			},
		],
		starCodes: ['12345', 'ABCDE', '1A2B3'],
		footerLists: [
			{
				title: 'About Us',
				pages: [
					{
						text: 'Our company',
						url: 'https://www.starbucks.com/about-us/',
					},
					{
						text: 'Our Coffee',
						url: 'https://www.starbucks.com/coffee',
					},
					{
						text: 'Stories and News',
						url: 'https://stories.starbucks.com/',
					},
					{
						text: 'Starbucks Archive',
						url: 'https://archive.starbucks.com/',
					},
					{
						text: 'Investor Relations',
						url: 'https://investor.starbucks.com/',
					},
					{
						text: 'Customer Service',
						url: 'https://customerservice.starbucks.com/',
					},
				],
			},
			{
				title: 'Careers',
				pages: [
					{
						text: 'Culture and Values',
						url: 'https://www.starbucks.com/careers/working-at-starbucks/culture-and-values',
					},
					{
						text: 'Inclusion. Diversity and Equity',
						url: 'https://stories.starbucks.com/stories/equity-inclusion/',
					},
					{
						text: 'College Achievement Plan',
						url: 'https://www.starbucks.com/careers/working-at-starbucks/education',
					},
					{
						text: 'Alumni Community',
						url: 'https://alumni.starbucks.com/',
					},
					{
						text: 'U.S. Carreers',
						url: 'https://www.starbucks.com/careers/',
					},
					{
						text: 'International Careers',
						url: 'https://www.starbucks.com/careers/international-careers',
					},
				],
			},
			{
				title: 'Social Impact',
				pages: [
					{
						text: 'People',
						url: 'https://www.starbucks.com/responsibility/people',
					},
					{
						text: 'Planet',
						url: 'https://starbucks.com/responsibility/planet',
					},
					{
						text: 'Enviromental and Social Impact Reporting',
						url: 'https://www.starbucks.com/responsibility/reporting-hub',
					},
				],
			},
			{
				title: 'Business Partners',
				pages: [
					{
						text: 'Landlord Support Center',
						url: 'https://www.starbucks.com/business/landlord-faq',
					},
					{
						text: 'Suppliers',
						url: 'https://www.starbucks.com/business/suppliers',
					},
					{
						text: 'Corporate Gift card Sales',
						url: 'https://www.starbuckscardb2b.com/',
					},
					{
						text: 'Office and Foodservice Coffee',
						url: 'https://www.starbucks.com/business',
					},
				],
			},
			{
				title: 'Order & Pickup',
				pages: [
					{
						text: 'Order on the App',
						url: 'https://www.starbucks.com/rewards/mobile-apps',
					},
					{
						text: 'Order on the Web',
						url: 'https://www.starbucks.com/menu',
					},
					{
						text: 'Delivery',
						url: 'https://delivery.starbucks.com/',
					},
					{
						text: 'Order and Pickups Options',
						url: 'https://www.starbucks.com/ways-to-order',
					},
					{
						text: 'Explore and Find Coffee for Home',
						url: 'https://athome.starbucks.com/?utm_source=starbucks.com&utm_medium=referral&utm_campaign=footer',
					},
				],
			},
		],
		subFooterLists: [
			[
				{
					img: 'fab fa-spotify',
					url: 'https://open.spotify.com/user/starbucks',
				},
				{
					img: 'fab fa-facebook-f',
					url: 'https://facebook.com/starbucks',
				},
				{
					img: 'fab fa-pinterest-p',
					url: 'https://www.pinterest.com/starbucks/',
				},
				{
					img: 'fab fa-instagram',
					url: 'https://instagram.com/starbucks',
				},
				{
					img: 'fab fa-youtube',
					url: 'https://www.youtube.com/starbucks',
				},
				{
					img: 'fab fa-twitter',
					url: 'https://twitter.com/starbucks/',
				},
			],
			[
				{
					text: 'Privacy Policy',
					url: 'https://www.starbucks.com/terms/privacy-policy',
				},
				{
					text: 'Terms of Use',
					url: 'https://www.starbucks.com/terms/starbucks-terms-of-use',
				},
				{
					text: 'CA SUpply Chain Act',
					url: 'https://globalassets.starbucks.com/assets/A2A072E3411C4A6ABAEB8D6BCF286F43.pdf',
				},
				{
					text: 'Cookie Preferences',
					url: '/modal',
				},
			],
		],
	},
	created() {
		window.addEventListener('resize', e => {
			this.screenWidth = window.innerWidth;
		});
	},
	methods: {

		selectActiveSlide(i) {
			this.active_carousel = i;
		},
		
		checkCode() {
			//check if the inserted code is valid
			if (this.starCodes.includes(this.starInput.trim())) {
				// if yes set codeOk to true, and manage inputwrapper classes
				this.$refs.inputWrap.classList.remove('denied');
				this.$refs.inputWrap.classList.add('success');
				this.codeOk = true;
			} else {
				// if not, set codeOk to false and manage inputwrapperclasses
				this.$refs.inputWrap.classList.remove('success');
				this.$refs.inputWrap.classList.add('denied');
				this.codeOk = false;
			}
			//then clear the input field
			this.starInput = '';
			// after 2 seconds remove every classes from inputwrapper, set codeOk to null and remove focus from the input
			setTimeout(()=> {
				this.$refs.inputWrap.classList.remove('success');
				this.$refs.inputWrap.classList.remove('denied');
				this.codeOk = null;
				document.activeElement.blur();
			} ,2000);
		},

		setActivePage(i) {
			this.activePage = i;
		},

		setActiveFAQ(i) {
			if (this.activeFAQ != i) {
				this.activeFAQ = i;
			} else {
				this.activeFAQ = null;
			}
		},

		mobileTrue() {
			this.mobileMenu = !this.mobileMenu;
		},

		closeMobileNav() {
			this.mobileMenu = false;
		},
		
		moveRewardsIndicator() {
			let size = 20 * this.active_carousel;
			this.$refs.indicator.style = `left: ${size}%`;
		}
	},

});