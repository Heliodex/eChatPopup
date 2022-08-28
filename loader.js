if (document.getElementById("eChatWindow")) {
	// Find if the window already exists (has been previously closed)
	// If it has been, just make it visible again
	const Window = document.getElementById("eChatWindow")
	Object.assign(Window.style, {
		display: getComputedStyle(Window).getPropertyValue("display") == "block" ? "none" : "block",
	})
} else {
	// Otherwise, download the script to create the popup
	let script = document.createElement("script")
	script.src = "https://cdn.jsdelivr.net/gh/heliodex/echatpopup/m.js"
	document.body.appendChild(script)
}
