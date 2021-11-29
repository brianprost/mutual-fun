<script>
    import Nested from "./AnotherOneButton.svelte";
    let companyName = generateCompanyName();

    function generateCompanyName() {
        fetch("./generate-company-name")
            .then((data) => data.text())
            .then((data) => (companyName = data));
    }
</script>

<h1 class="company-name">{companyName}</h1>
<div class="do-again">
    <button
        on:click={generateCompanyName}
        class="another-one-button"
        type="submit">AnotherOne</button
    >
</div>
