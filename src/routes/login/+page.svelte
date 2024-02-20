<script>
	let register = $state(true)
</script>

{#if register}
	<form method="POST" action="/login?/register">
		<input type="text" placeholder="Username" />
		<input type="email" placeholder="Email" />
		<input type="password" placeholder="Password" />

		<button>Sign up</button>
	</form>
{:else}
	<form method="POST" action="/login?/login">
		<input type="text" placeholder="Username" />
		<input type="email" placeholder="Email" />
		<input type="password" placeholder="Password" />

		<button>Log in</button>
	</form>
{/if}
