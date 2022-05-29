<script>
	
	import Counter from './components/Counter.svelte';
	import Toggle from './components/Toggle.svelte';
	import Img from './components/Img.svelte';
	import String from './components/String.svelte';
	import Statement from './components/Statement.svelte';
	import Condition from './components/Condition.svelte';
	import Nested from './components/Nested.svelte';
	import Info from './components/Info.svelte';
	import IfLogin from './components/IfLogin.svelte';
	import Comparison from './components/Comparison.svelte';
	import EachYoutube from './components/EachYoutube.svelte';
	import KeyEachThing from './components/KeyEachThing.svelte'
	import GenerateNumber from './components/GenerateNumber.svelte';
	import MouseMove from './components/MouseMove.svelte'
	import MouseMoveInlineHandler from './components/MouseMoveInlineHandler.svelte';
	import EventModifier from './components/EventModifier.svelte';
	import AlertCompEvent from './components/AlertCompEvents.svelte';
	import AlertEventForwarding from './components/AlertEventForwarding.svelte';
	import CustomButtonComp from './components/CustomButton.svelte';
	import TextInput from './components/TextInput.svelte';
	import NumericInput from './components/NumericInput.svelte';
	import CheckboxInputs from './components/CheckboxInputs.svelte';
	import GroupInputs from './components/GroupInputs.svelte';
	import TextareaInputs from './components/TextareaInputs.svelte';
	import FileInput from './components/FileInput.svelte';
	import SelectBindings from './components/SelectBindings.svelte';
	import SelectMultiple from './components/SelectMultiple.svelte';
	import EachBlockBindings from './components/EachBlockBindings.svelte';
	import MediaElements from './components/MediaElements.svelte';
	import Dimensions from './components/Dimensions.svelte';
	import BindThisCanvas from './components/BindThisCanvas.svelte';
	import ComponentBindings from './components/ComponentBindings.svelte';
	import OnMount from './components/OnMount.svelte';
	import OnDestroyIntervals from './components/OnDestroyIntervals.svelte';
	import BeforeAndAfterUpdate from './components/BeforeAndAfterUpdate.svelte';
	import Tick from './components/Tick.svelte';
	import Resetter from './components/stores/Resetter.svelte';
	import Incrementer from './components/stores/Incrementer.svelte';
	import Decrementer from './components/stores/Decrementer.svelte';
	import { countWritable } from './components/stores/stores/stores';
	import ResetterAutoSubscriptions from './components/stores/stores/auto_subscriptions/Resetter.svelte';
	import IncrementerAutoSubscriptions from './components/stores/stores/auto_subscriptions/Incrementer.svelte';
	import DecrementerAutoSubscriptions from './components/stores/stores/auto_subscriptions/Decrementer.svelte';
	import { countAutoSubscriptions } from './components/stores/stores/stores';
	import { time, elapsed, countCustom } from './components/stores/stores/stores';
	import Tweened from './components/motions/Tweened.svelte';
	import Spring from './components/motions/Spring.svelte';
	import TransitionsDirective from './components/transitions/TransitionsDirective.svelte';
	import AddingParameters from './components/transitions/AddingParameters.svelte';
	import InOut from './components/transitions/InOut.svelte';
	import CustomCss from './components/transitions/CustomCss.svelte';
	import CustomJs from './components/transitions/CustomJS.svelte';
	import TransitionEvents from './components/transitions/TransitionEvents.svelte';
	import Deffered from './components/transitions/Deffered.svelte';
	import AnimateDirective from './components/animations/AnimateDirective.svelte';
	import Visualiser from './components/eases/Visualiser.svelte';
	import Clock from './components/svgs/Clock.svelte';
	import BarChart from './components/svgs/BarChart.svelte';
	import AreaChart from './components/svgs/AreaChart.svelte';
	import Scatterplot from './components/svgs/Scatterplot.svelte';
	import CustomTransition from './components/svgs/CustomTransition.svelte';
	import ClickOutside from './components/actions/ClickOutside.svelte';
	import LongpressActions from './components/actions/LongpressActions.svelte';
	import PannableActions from './components/actions/PannableActions.svelte';
	import ClassDirective from './components/classes/ClassDirective.svelte';
	import ShortHand from './components/classes/ShortHand.svelte';
	import Slots from './components/compositions/Slots.svelte';
	import Box from './components/compositions/Box.svelte'
	import ContactCard from './components/compositions/ContactCard.svelte'
	import Hoverable from './components/compositions/Hoverable.svelte';
	import Profile from './components/compositions/Profile.svelte'
	import Modal from './components/compositions/Modal.svelte'
	// import Map from './components/context_api/MapComp.svelte'
	import FolderComp from './components/special_elements/FolderComp.svelte';
	import ColorComp from './components/special_elements/ColorComp.svelte';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	export let name;

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

	let countValue;

	const unsubscribe = countWritable.subscribe(value => {
		countValue = value;
	});

</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Counter />
	<Toggle />
	<Img />
	<String />
	<Statement />
	<Condition />
	<Nested answer={42}/>
	<Nested/>
	<Info {...pkg}/>
	<IfLogin />
	<Comparison />
	<EachYoutube />
	<KeyEachThing />
	<GenerateNumber />
	<MouseMove />
	<MouseMoveInlineHandler />
	<EventModifier />
	<AlertCompEvent />
	<AlertEventForwarding />
	<CustomButtonComp />
	<TextInput />
	<NumericInput />
	<CheckboxInputs />
	<GroupInputs />
	<TextareaInputs />
	<FileInput />
	<SelectBindings />
	<SelectMultiple />
	<EachBlockBindings />
	<MediaElements />
	<Dimensions />
	<BindThisCanvas />
	<ComponentBindings />
	<OnMount />
	<OnDestroyIntervals />
	<BeforeAndAfterUpdate />
	<Tick />
	<h1>The count is {countValue}</h1>
	<Incrementer/>
	<Decrementer/>
	<Resetter/>
	<h1>The count is {$countAutoSubscriptions}</h1>
	<IncrementerAutoSubscriptions/>
	<DecrementerAutoSubscriptions/>
	<ResetterAutoSubscriptions/>
	<h1>The time is {formatter.format($time)}</h1>
	<h1>The time is {formatter.format($time)}</h1>
	<p>
		This page has been open for
		{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
	</p>
	<h1>The count is {$countCustom}</h1>
	<button on:click={countCustom.increment}>+</button>
	<button on:click={countCustom.decrement}>-</button>
	<button on:click={countCustom.reset}>reset</button>
	<Tweened />
	<Spring />
	<TransitionsDirective />
	<AddingParameters />
	<InOut />
	<CustomCss />
	<CustomJs />
	<TransitionEvents />
	<Deffered />
	<AnimateDirective />
	<Visualiser />
	<Clock />
	<BarChart />
	<AreaChart />
	<Scatterplot />
	<CustomTransition />
	<ClickOutside />
	<LongpressActions />
	<PannableActions />
	<ClassDirective />
	<ShortHand />
	<Slots />
	<Box>
		<h2>Hello!</h2>
		<p>This is a box. It can contain anything.</p>
	</Box>
	<Box/>
	<ContactCard>
		<span slot="name">
			P. Sherman
		</span>
	
		<span slot="address">
			42 Wallaby Way<br>
			Sydney
		</span>
	</ContactCard>
	<Hoverable />
	<Profile />
	<Modal />
	<!-- <Map /> -->
	<FolderComp />
	<ColorComp />

</main>

<link href="https://fonts.googleapis.com/css?family=Overpass:100,400" rel="stylesheet">

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
	svg {
		width: 100%;
		height: 100%;
	}

	path {
		fill: white;
		opacity: 1;
	}

	label {
		position: absolute;
		top: 1em;
		left: 1em;
	}

	.centered {
		font-size: 20vw;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-family: 'Overpass';
		letter-spacing: 0.12em;
		color: #676778;
		font-weight: 400;
	}

	.maxSVG{
		max-width: 200px;
	}

	.centered span {
		will-change: filter;
	}
</style>