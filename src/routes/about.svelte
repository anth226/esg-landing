<script lang="ts">
	const team = [
		{
			name: 'Adam Jace',
			role: 'Co-Founder / Product & Execution',
			image: '/assets/profiles/adam.png',
		},
		{
			name: 'Max Mona',
			role: 'Co-Founder / Business Development',
			image: '/assets/profiles/max.png',
		},
		{
			name: 'Anna Ward',
			role: 'VP of ESG',
			image: '/assets/profiles/profile3.jpg',
		},
		{
			name: 'Stanley Ho',
			role: 'ESG Analyst',
			image: '/assets/profiles/profile1.jpg',
		},
		{
			name: 'Blake Broadnax',
			role: 'ESG Analyst',
			image: '/assets/profiles/profile2.jpg',
		},
		{
			name: 'Chris Ma',
			role: 'Software Engineer',
			image: '/assets/profiles/chris.png',
		},
		{
			name: 'Stas Gagarin',
			role: 'Software Engineer',
			image: '/assets/profiles/profile1.jpg',
		},
		{
			name: 'Linda Isaacson',
			role: 'Commercial Real Estate Advisor',
			image: '/assets/profiles/linda.png',
		},
		{
			name: 'Mark Cohen',
			role: 'ESG Advisor',
			image: '/assets/profiles/mark.png',
		},
		{
			name: 'Tony Jace',
			role: 'Business Advisor',
			image: '/assets/profiles/profile1.jpg',
		},
		{
			name: 'Thomas Burke',
			role: 'Business Development Advisor',
			image: '/assets/profiles/profile2.jpg',
		},
	];
</script>

<section class="text-black bg-white">
	<div class="max-w-6xl w-full mx-auto flex-1 flex-col justify-center">
		<div class="grid grid-cols-8 gap-3">
			<div class="col-span-5">
				<div class="flex flex-col w-full justify-center items-start py-4">
					<div class="mt-20 text-primary font-bold text-xl">Our Mission & Values</div>
					<div class="text-6xl text-secondary mt-4 half-background">Guiding philosophy.</div>
				</div>
				<div class="text-lg mt-6">
					<div>
						The mission of ESG Impact is to <span>democratize</span> ESG & <span>illustrate</span> Impact.
					</div>
					<div class="mt-6">
						We provide accessible and pragmatic frameworks for companies and funds to assess and
						address ESG metrics most material to their operations. We believe that business ethics
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

		<div class="grid grid-cols-4 gap-8 mt-8">
			{#each team as { name, role, image }, idx}
				<label for="team-modal-{idx}" class="modal-button">
					<div class="bg-secondary h-6 w-6 z-10 absolute" />
					<div class="bg-secondary rounded-xl">
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis
								architecto ipsam. Eveniet expedita quibusdam in. Repellendus quia, perferendis vel
								tempore fuga nisi facere. Illum sapiente laboriosam deleniti nesciunt autem.
								Assumenda enim, omnis ducimus accusamus optio eligendi, illum nemo vel laborum
								repellendus ea earum exercitationem distinctio. Molestiae aliquid saepe et!
							</p>
						</div>
					</label>
				</label>
			{/each}
		</div>
	</div>
</section>

<!-- <img src="/examples/team-example.webp" alt="ex" /> -->
<style>
	.half-background {
		background: linear-gradient(to top, #fcf8e3 40%, transparent 40%);
	}
</style>
