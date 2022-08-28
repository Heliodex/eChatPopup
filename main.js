if (document.getElementById("eChatWindow")) {
	const eChatWindow = document.getElementById("eChatWindow")
	Object.assign(eChatWindow.style, {
		display: getComputedStyle(eChatWindow).getPropertyValue("display") == "block" ? "none" : "block",
	})
} else {
	/* <div id="eChatWindow" style="all: initial; position: fixed; top: 0; left: 0; z-index: 2147483647">
	<header id="eChatMainHeader" style="background: #0000007f; backdrop-filter: blur(6px); border-radius: 16px 16px 0 0; cursor: move; height: 40px">
		<button style="all: initial; background: none; padding: 5px 10px 0; float: right; color: white; font-size: 28px; font-family: Arial; cursor: pointer">X</button>
	</header>
	<iframe src="https://localhost:4173" title="eChat" height="500" width="375" style="border: none; border-radius: 0 0 16px 16px" />
</div> */

	// Create the ui

	const eChatWindow = document.createElement("div")
	Object.assign(eChatWindow.style, {
		all: "initial",
		position: "fixed",
		top: 0,
		left: 0,
		zIndex: Number.MAX_SAFE_INTEGER,
		display: "block",
	})
	eChatWindow.id = "eChatWindow"

	const eChatMainHeader = document.createElement("div")
	Object.assign(eChatMainHeader.style, {
		all: "initial",
		background: "#0000007f",
		backdropFilter: "blur(6px)",
		borderRadius: "16px 16px 0 0",
		cursor: "move",
		height: "40px",
		display: "block",
	})

	const eChatMainHeaderCloseButton = document.createElement("button")
	Object.assign(eChatMainHeaderCloseButton.style, {
		all: "initial",
		background: "none",
		padding: "5px 10px 0",
		float: "right",
		color: "white",
		fontSize: "28px",
		fontFamily: "Arial",
		cursor: "pointer",
	})
	eChatMainHeaderCloseButton.innerText = "X"

	const eChatIframe = document.createElement("iframe")
	Object.assign(eChatIframe.style, {
		border: "none",
		borderRadius: "0 0 16px 16px",
	})
	eChatIframe.src = "https://chat.echatapp.ml"
	eChatIframe.title = "eChat"
	eChatIframe.height = "500"
	eChatIframe.width = "375"

	eChatMainHeader.appendChild(eChatMainHeaderCloseButton)
	eChatWindow.appendChild(eChatMainHeader)
	eChatWindow.appendChild(eChatIframe)
	document.body.appendChild(eChatWindow)

	eChatMainHeaderCloseButton.onclick = function () {
		Object.assign(eChatWindow.style, {
			display: "none",
		})
	}

	// thanks, w3schools	https://www.w3schools.com/howto/howto_js_draggable.asp
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0

	eChatMainHeader.onmousedown = dragMouseDown

	function dragMouseDown(e) {
		e = e || window.event
		e.preventDefault()
		// get the mouse cursor position at startup:
		pos3 = e.clientX
		pos4 = e.clientY
		document.onmouseup = closeDragElement
		// call a function whenever the cursor moves:
		document.onmousemove = elementDrag
	}

	function elementDrag(e) {
		e = e || window.event
		e.preventDefault()
		// calculate the new cursor position:
		pos1 = pos3 - e.clientX
		pos2 = pos4 - e.clientY
		pos3 = e.clientX
		pos4 = e.clientY
		// set the element's new position:
		eChatWindow.style.top = eChatWindow.offsetTop - pos2 + "px"
		eChatWindow.style.left = eChatWindow.offsetLeft - pos1 + "px"
	}

	function closeDragElement() {
		// stop moving when mouse button is released:
		document.onmouseup = null
		document.onmousemove = null
	}
}
