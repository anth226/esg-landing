<script lang="ts">
	const team = [
		{
			name: 'Adam Jace',
			role: 'Co-Founder / Product & Execution',
			image: '/assets/profiles/adam.png',
			bio: `Adam was born in Papatoetoe, New Zealand, and has lived in Malaysia, Australia, Minnesota, and Wisconsin. He graduated magna cum laude from the University of Dallas where he played for their rugby team. Adam attended Vanderbilt University as part of their Master of Science in Finance program. His background is in buy-side M&A and investment banking. He enjoys competitive sports, travelling, composing music, and is an avid chess player.`,
		},
		{
			name: 'Max Mona',
			role: 'Co-Founder / Business Development',
			image: '/assets/profiles/max.png',
			bio: `Max, an Annapolis, MD native recently graduated with magna cum laude honors from Concordia College (MN) and was also a member of their nationally ranked NCAA ice hockey program. Max has worked extensively in private markets and with start-ups having spent time with LandFund Partners, STAX Financial Technologies, GoAhead Ventures, and most recently Atento Capital as an entrepreneur-in-residence. He enjoys music production, mountain climbing, and spending time with his dogs Brooks & Sunday in his free time.`,
		},
		{
			name: 'Stanley Ho',
			role: 'ESG Analyst',
			image: '/assets/profiles/stanley.png',
			bio: `A Toronto native, passionate creative, and adventurous eater, Stanley attended the Ivey Business School at Western University in Canada. Stanley previously worked in social impact, where he led the launch of a multimillion-dollar affordable housing debt fund on the East Coast, and in strategy consulting, where he drove ESG engagements across multiple public and private market sectors as part of KPMG’s Sustainability Services practice. In his free time, Stanley spends time with his dog Apollo, plays video games, and designs clothing.`,
		},
		{
			name: 'Blake Broadnax',
			role: 'ESG Analyst',
			image: '/assets/profiles/blake.png',
			bio: `Blake was raised in Madison, WI and graduated from The University of Michigan where he holds a B.A. in Political Science. Prior to ESG Impact, Blake worked at TPG where he was responsible for ESG strategy, portfolio company engagements, and assessing ESG performance for TPG Private Equity and Growth Equity portfolio companies. Blake also has ESG experience within Public Markets as he started his career on the ESG team at Wellington Management where he primarily covered Tech and Financials. In his free time, he enjoys watching basketball, listening to music, and hiking.`,
		},
		{
			name: 'Chris Ma',
			role: 'Software Engineer',
			image: '/assets/profiles/chris.png',
			bio: `Chris is a senior software developer with over 12 years of experience specializing in web and blockchain development. Most recently, Chris has spent time with ABSTRAKT helping lead the development of their Blockchain as a Service business model. Before that, Chris had spent over 3 years working as a senior software engineer with Microsoft.`,
		},
		{
			name: 'Wade Fletcher',
			role: 'Software Engineer',
			image: '/assets/profiles/wade.png',
			bio: `Chris is a senior software developer with over 12 years of experience specializing in web and blockchain development. Most recently, Chris has spent time with ABSTRAKT helping lead the development of their Blockchain as a Service business model. Before that, Chris had spent over 3 years working as a senior software engineer with Microsoft.`,
		},
		{
			name: 'Linda Isaacson',
			role: 'Commercial Real Estate Advisor',
			image: '/assets/profiles/linda.png',
			bio: `Linda J. Isaacson is a globally recognized strategic thinker, accelerator of change, and developer of high-impact organizational cultures, with a deep understanding of the environmental, societal, technological factors - reshaping the built environment. She is Partner and Head of ESG & Impact for global real estate private equity firm Asia Capital Real Estate (ACRE), where she leads the firm's environmental, social, and governance (ESG) practices, ensuring ongoing investment decisions, operational actions and overall business philosophy reflect its core principles and those of its investors, including environmental justice, economic equality, social initiatives, and transparency.`,
		},
		{
			name: 'Mark Cohen',
			role: 'ESG Advisor',
			image: '/assets/profiles/mark.png',
			bio: `Dr. Mark Cohen is an ESG thought leader and subject matter expert having spent over 35 years teaching at Vanderbilt University as the Justin Potter Professor of American Competitive Analysis & Professor of Law. He has spent over 10 years working as a member of the External Sustainability Council for ExxonMobil and has been an active member of the Board of Directors for the Global Reporting Initiative (GRI), one of the leading ESG reporting agencies in the world.`,
		},
	];
</script>

<section class="text-black bg-white">
	<div class="max-w-6xl w-full mx-auto flex-1 flex-col justify-center">
		<div class="grid grid-cols-8 gap-6">
			<div class="col-span-5">
				<div class="flex flex-col w-full justify-center items-start py-4">
					<div class="mt-20 text-primary font-bold text-xl">Our Mission & Values</div>
					<div class="text-6xl text-secondary mt-4 half-background">Guiding philosophy.</div>
				</div>
				<div class="text-lg mt-6">
					<div>The mission of ESG Impact is to democratize ESG & Impact for private markets.</div>
					<div class="mt-6">
						We provide accessible and pragmatic solutions for companies and funds to assess and
						address ESG metrics most salient to their operations. We believe that business ethics
						should not be transactional or cost a fortune. We understand that greenwashing is the
						result of pushing ESG too far, using the complexity and myriad of frameworks as a means
						for profitable confusion instead of a call for unification.
					</div>
					<div class="mt-6 ">
						Our core values are: <span class="text-primary font-bold">Quality</span>, doing things
						extraordinarily well or not at all;
						<span class="text-primary font-bold">Inspiration</span>, uplifting ourselves and our
						peers; <span class="text-primary font-bold">Diversity</span>, reaping the benefits of
						having different perspectives; and
						<span class="text-primary font-bold">Transparency</span>, being authentic in action and
						displaying a boldness to unveil the truth. We have decided on these not for their
						encompassment of ethics, but for the applicability to our business operations and
						dynamisms of our founding team.
					</div>
				</div>
			</div>
			<div class="col-span-3 justify-end flex items-center mt-20 relative">
				<img
					alt="trees"
					src="/assets/1.jpg"
					class="h-[500px] rounded z-20"
					style="  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);"
				/>
			</div>
		</div>
		<hr class="my-6 border-gray-300" />
	</div>
</section>

<section class="text-black bg-white mb-24">
	<div class="max-w-6xl w-full mx-auto flex-1 flex-col justify-center">
		<div class="flex flex-col w-full justify-center items-start py-4">
			<div class="text-primary font-bold text-xl">Our Team</div>
			<div class="text-6xl text-secondary mt-4 half-background">It's all about the people.</div>
		</div>
		<div class="text-lg mt-6">
			<div class="">
				To be the company our customers expect us to be, it takes a group that is passionate about
				business ethics and willing to go the extra-mile to do it right.
			</div>
			<div>
				Interested in working for ESG Impact? Check out our <a
					target="_blank"
					href="https://jobs.gusto.com/boards/esg-impact-inc-fcc94ba4-9a52-489f-8442-dc3f527e5d1a"
					class="text-primary font-bold">Career Page</a
				> for current openings.
			</div>
		</div>

		<div class="grid grid-cols-4 gap-12 mt-8">
			{#each team as { name, role, image, bio }, idx}
				<label for="team-modal-{idx}" class="modal-button">
					<div class="bg-secondary h-6 w-6 z-10 absolute" />
					<div class="bg-white rounded-xl">
						<img alt={name} src={image} class="hover:cursor-pointer rounded-xl hover:opacity-75" />
					</div>
					<div class="text-secondary text-xl mt-2 font-bold">{name}</div>
					<div class="text-gray-600 text-md">{role}</div>
				</label>

				<input type="checkbox" id="team-modal-{idx}" class="modal-toggle" />
				<label for="team-modal-{idx}" class="modal cursor-pointer">
					<label class="modal-box relative w-11/12 max-w-5xl" for="">
						<h3 class="text-lg font-bold">{name}</h3>
						{role}
						<div class="py-4">
							<img src={image} alt={name} width="400" height="400" class="float-left mr-4" />
							<p>
								{bio}
							</p>
						</div>
					</label>
				</label>
			{/each}
		</div>
	</div>
</section>
