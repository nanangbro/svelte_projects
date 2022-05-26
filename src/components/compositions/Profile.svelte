<script>
	import ProfileComp from "./components/ProfileComp.svelte";
</script>

<ProfileComp>
	<span slot="name">Bob</span>
	<span slot="email">bob@email.com</span>
</ProfileComp>

<ProfileComp>
	<span slot="name">Alice</span>
	<span slot="phone">12345678</span>
</ProfileComp>
