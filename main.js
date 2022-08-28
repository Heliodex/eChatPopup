// Create the ui
const Window = document.createElement("div")
Object.assign(Window.style, {
	all: "initial",
	position: "fixed",
	top: 0,
	left: 0,
	zIndex: Number.MAX_SAFE_INTEGER,
	display: "block",
})
Window.id = "eChatWindow"

// Create the header
const Header = document.createElement("div")
Object.assign(Header.style, {
	all: "initial",
	background: "#0000007f",
	backdropFilter: "blur(6px)",
	borderRadius: "16px 16px 0 0",
	cursor: "move",
	height: "40px",
	display: "block",
})

// Add the close button
const HeaderCloseButton = document.createElement("button")
Object.assign(HeaderCloseButton.style, {
	all: "initial",
	background: "none",
	padding: "5px 10px 0",
	float: "right",
	color: "white",
	fontSize: "28px",
	fontFamily: "Arial",
	cursor: "pointer",
})
HeaderCloseButton.innerText = "X"

// Make the iframe, a window to the actual eChat application
const iframe = document.createElement("iframe")
Object.assign(iframe.style, {
	border: "none",
	borderRadius: "0 0 16px 16px",
})
iframe.src = "https://chat.echatapp.ml"
iframe.title = "eChat"
iframe.height = "500"
iframe.width = "375"

Header.appendChild(HeaderCloseButton)
Window.appendChild(Header)
Window.appendChild(iframe)
document.body.appendChild(Window)

// Close the window when the close button is clicked
HeaderCloseButton.onclick = function () {
	Object.assign(Window.style, {
		display: "none",
	})
}

// Make the window draggable by the header
// Thanks w3schools for dragger code	https://www.w3schools.com/howto/howto_js_draggable.asp
Header.onmousedown = dragMouseDown

let pos1 = 0,
	pos2 = 0,
	pos3 = 0,
	pos4 = 0

function dragMouseDown(e) {
	e = e || window.event
	e.preventDefault()

	// Get the mouse cursor position at startup:
	pos3 = e.clientX
	pos4 = e.clientY
	document.onmouseup = closeDragElement

	// Call a function whenever the cursor moves:
	document.onmousemove = elementDrag
}

function elementDrag(e) {
	e = e || window.event
	e.preventDefault()

	// Calculate the new cursor position:
	pos1 = pos3 - e.clientX
	pos2 = pos4 - e.clientY
	pos3 = e.clientX
	pos4 = e.clientY

	// Set the element's new position:
	Window.style.top = Window.offsetTop - pos2 + "px"
	Window.style.left = Window.offsetLeft - pos1 + "px"
}

function closeDragElement() {
	// Stop moving when mouse button is released:
	document.onmouseup = null
	document.onmousemove = null
}
