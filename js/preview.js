// localStorage condition
if (window.localStorage.popupNumber) {
	window.localStorage.popupNumber = +window.localStorage.popupNumber + 1;
} else {
	window.localStorage.popupNumber = 0;
}
document.querySelector(".show-btn").addEventListener("click", function (e) {
	e.target.parentElement.classList.toggle("showing");
});
// // variables and functions
// will set to the css of the popup directly
let inputs = Array.from(document.querySelectorAll(".option .direct-rules"));
let buttons = Array.from(document.querySelectorAll(".option-button"));
let contInputs = Array.from(
	document.querySelectorAll(".option .container-rules")
);
let childInputs = Array.from(
	document.querySelectorAll(".option .childs-rules")
);
let aInputs = Array.from(document.querySelectorAll(".a-rules"));
let pInputs = Array.from(document.querySelectorAll(".p-rules"));
let ulInputs = Array.from(document.querySelectorAll(".ul-rules"));
let liInputs = Array.from(document.querySelectorAll(".li-rules"));
let divInputs = Array.from(document.querySelectorAll(".div-rules"));
let divChildsInputs = Array.from(document.querySelectorAll(".divchilds-rules"));
let imgInputs = Array.from(document.querySelectorAll(".img-rules"));
//this variables are needed to create dynamic variables
let c = "cssObject";
let p = "adhamElement";
let ele = "aElement";
let elementName = "";
// localStorage variable
let lSPopupNumber = window.localStorage.popupNumber;
// dynamic object variable
eval(`var ${c}${lSPopupNumber}= {};`);
// object variable
let mainObject = eval(c + lSPopupNumber);

// setting the properties of the popup
function setProperty(property, value) {
	let popup = document.getElementById(`${p}${lSPopupNumber}`);
	popup.style[property] = value;
}
function setContProperties(property, value) {
	let cont = document.getElementById(`containerNumber${lSPopupNumber}`);
	cont.style[property] = value;
}
function setChildrenProperties(property, value) {
	let childs = Array.from(
		document.getElementById(`containerNumber${lSPopupNumber}`).childNodes
	);
	childs.forEach((child) => {
		child.style[property] = value;
	});
}
function setAProperties(property, value) {
	let a = Array.from(
		document.querySelectorAll(`#containerNumber${lSPopupNumber} a`)
	);
	a.forEach((link) => {
		link.style[property] = value;
	});
}
function setPProperties(property, value) {
	let p = Array.from(
		document.querySelectorAll(`#containerNumber${lSPopupNumber} p`)
	);
	p.forEach((paraph) => {
		paraph.style[property] = value;
	});
}
function setImgProperties(property, value) {
	let imgs = Array.from(
		document.querySelectorAll(`#containerNumber${lSPopupNumber} img`)
	);
	imgs.forEach((img) => {
		img.style[property] = value;
	});
}
function setUlProperties(property, value) {
	let uls = Array.from(
		document.querySelectorAll(`#containerNumber${lSPopupNumber} ul`)
	);
	uls.forEach((ul) => {
		ul.style[property] = value;
	});
}
function setLiProperties(property, value) {
	let lis = Array.from(
		document.querySelectorAll(`#containerNumber${lSPopupNumber} ul li`)
	);
	lis.forEach((li) => {
		li.style[property] = value;
	});
}
function setDivProperties(property, value) {
	let divs = Array.from(
		document.querySelectorAll(`#containerNumber${lSPopupNumber} div`)
	);
	divs.forEach((div) => {
		div.style[property] = value;
	});
}
function setDivChildsProperties(property, value) {
	let divs = Array.from(
		document.querySelectorAll(`#containerNumber${lSPopupNumber} div`)
	);
	divs.forEach((div) => {
		Array.from(div.childNodes).forEach((divChild) => {
			divChild.style[property] = value;
		});
	});
}
function setAllProperties(inputs, objects, func) {
	for (let i = 0; i < inputs.length; i++) {
		Object.defineProperties(objects, {
			[inputs[i].dataset.property]: {
				value: inputs[i].value,
				configurable: true,
				writable: true,
				enumerable: true,
			},
		});
		func(Object.keys(objects)[i], Object.values(objects)[i]);
	}
}
// call the main function
function callPopupMethods() {
	mainObject.popupAppear();
}
// handle the active button
function handleActive(ev) {
	ev.target.parentElement.querySelectorAll(".active").forEach((element) => {
		element.classList.remove("active");
	});
	ev.target.classList.add("active");
}
// set default properties for the type of element are chosed
function elementProperties(eleArray, theInputs) {
	for (let i = 0; i < eleArray.length; i++) {
		theInputs[i].value = eleArray[i];
	}
}
// set object propertieas
buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		handleActive(e);
		let aElement = document.getElementById(`adhamElement${lSPopupNumber}`);
		function setType(elementType) {
			elementName = elementType;
			document.querySelectorAll(".popup").forEach((pop) => {
				pop.remove();
			});
			eval(
				`var ${p}${lSPopupNumber}= document.createElement("${elementType}");`
			);
			let adhamContainer = document.createElement("div");
			adhamContainer.classList.add(`adham-container`);
			adhamContainer.id = `containerNumber${lSPopupNumber}`;
			eval(p + lSPopupNumber).append(adhamContainer);
			document.body.append(eval(p + lSPopupNumber));
			let mainElement = eval(p + lSPopupNumber);
			mainElement.id = `${p}${lSPopupNumber}`;
			mainElement.classList.add("popup");
			// code to append the popup to the body
			// code to add the clicked class to the element to use it in condition
			const parentElement = e.target.parentElement.parentElement;
			parentElement.classList.add("clicked");
		}
		if (e.target.dataset.ele) {
			if (e.target.dataset.ele == "popup") {
				// width, height, top and left values
				let inputValues = ["200px", "200px", "50%", "50%"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
				setType("div");
			} else if (e.target.dataset.ele == "header") {
				// width, height, top and left valuess
				let inputValues = ["100%", "15%", "0", "0"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
				setType("header");
			} else if (e.target.dataset.ele == "navigation") {
				// width, height, top and left valuess
				let inputValues = ["15%", "100%", "0", "85%"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
				setType("nav");
			} else if (e.target.dataset.ele == "scroll") {
				// width, height, top and left valuess
				let inputValues = ["55px", "55px", "92%", "94%"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
				setType("div");
				document.querySelector(".func-opt").classList.add("show-option");
			} else if (e.target.dataset.ele == "others") {
				let inputValues = ["0px", "0px", "0%", "0%"];
				let inputEArray = Array.from(document.querySelectorAll(".e-option"));
				// function to set the properties of width, height, top and left
				elementProperties(inputValues, inputEArray);
				setType("div");
			}
		} else if (e.target.dataset.sugfun) {
			if (e.target.dataset.sugfun == "scroll-to-top") {
				mainObject.appearReason = "custom";
				mainObject.sugFun = "scrollToTop";
			}
		} else if (e.target.dataset.overlay) {
			// (overlay) condition
			if (e.target.dataset.overlay == "yes") {
				mainObject.overlay = true;
			} else if (e.target.dataset.overlay == "no") {
				mainObject.overlay = false;
			}
		} else if (e.target.dataset.center) {
			// (centering) condition
			if (e.target.dataset.center == "yes") {
				mainObject.center = true;
				document.getElementById("top").value = "50%";
				document.getElementById("left").value = "50%";
			} else if (e.target.dataset.center == "no") {
				mainObject.center = false;
			}
		} else if (e.target.dataset.appear) {
			// (the appear reason) conditions
			let oClick = document.querySelector(".onclick");
			let stTime = document.querySelector(".start-time");
			if (e.target.dataset.appear == "start-time") {
				mainObject.appearReason = "start-time";
				oClick.classList.remove("show-option");
				stTime.classList.add("show-option");
				document.querySelector(".effect").style.display = "block";
			} else if (e.target.dataset.appear == "onclick") {
				mainObject.appearReason = "onclick";
				document.querySelector(
					".appear-class"
				).textContent = `adham-btn adham-show${lSPopupNumber}`;
				stTime.classList.remove("show-option");
				oClick.classList.add("show-option");
				document.querySelector(".effect").style.display = "block";
			} else if (e.target.dataset.appear == "static") {
				mainObject.appearReason = "static";
				document.querySelector(".effect").style.display = "none";
			}
		} else if (e.target.dataset.disappear) {
			// (the disappear reason) conditions
			let oClickToEnd = document.querySelector(".onclick-to-end");
			let enTime = document.querySelector(".end-time");
			if (e.target.dataset.disappear == "end-time") {
				mainObject.disAppearReason = "end-time";
				oClickToEnd.classList.remove("show-option");
				enTime.classList.add("show-option");
			} else if (e.target.dataset.disappear == "onclick") {
				mainObject.disAppearReason = "onclick";
				document.querySelector(
					".disappear-class"
				).textContent = `adham-btn A adham-hidden${lSPopupNumber}`;
				enTime.classList.remove("show-option");
				oClickToEnd.classList.add("show-option");
			}
		} else if (e.target.dataset.show) {
			// (the appear way) conditions
			console.log("true");

			if (e.target.dataset.show == "fade-in") {
				aElement.style.cssText = "opacity: 0";
				mainObject.show = "fade-in";
			} else if (e.target.dataset.show == "slide-down") {
				aElement.style.cssText = "top: -200vh";
				mainObject.show = "slide-down";
			} else if (e.target.dataset.show == "slide-up") {
				aElement.style.cssText = "top: 200vh";
				mainObject.show = "slide-up";
			} else if (e.target.dataset.show == "slide-left") {
				aElement.style.cssText = "left: 200%";
				mainObject.show = "slide-left";
			} else if (e.target.dataset.show == "slide-right") {
				aElement.style.cssText = "left: -200%";
				mainObject.show = "slide-right";
			}
		} else if (e.target.dataset.cont) {
			document.querySelector(".path-ext").style.display = "none";
			document.querySelector(".div-container").style.display = "none";
			document.querySelector(".ul-content").style.display = "none";
			let elementsOfParent = Array.from(e.target.parentElement.children);
			elementsOfParent.forEach((t) => {
				t.classList.remove("contentType");
			});
			e.target.classList.add("contentType");
			if (e.target.dataset.cont == "a" || e.target.dataset.cont == "img") {
				document.querySelector(".path-ext").style.display = "block";
			}
			if (e.target.dataset.cont == "div") {
				document.querySelector(".div-container").style.display = "block";
			} else if (e.target.dataset.cont == "ul") {
				document.querySelector(".ul-content").style.display = "block";
			}
		} else if (e.target.dataset.app) {
			if (e.target.dataset.app == "add") {
				let elementT = document.querySelector(".contentType").dataset.cont;
				let element = document.createElement(elementT);
				let elementContent = document.createTextNode(
					document.getElementById("content").value
				);
				let exts = document.querySelector(".path-ext .path").value;
				if (elementT == "a") {
					element.href = exts;
				} else if (elementT == "img") {
					element.src = exts;
					element.textContent = "";
				}
				if (elementT != "div" || elementT != "ul") {
					element.append(elementContent);
				}
				if (elementT == "div") {
					element.innerHTML = document.querySelector(
						".div-content-preview"
					).innerHTML;
				}
				if (elementT == "ul") {
					element.innerHTML = document.querySelector(
						".ul-content-preview"
					).innerHTML;
				}
				document.querySelector(".content-preview").append(element);
			} else if (e.target.dataset.app == "rem") {
				Array.from(
					document.querySelector(".content-preview").childNodes
				).forEach((child) => {
					child.addEventListener("click", (e) => {
						e.target.remove();
						document
							.querySelector("[data-app='rem']")
							.classList.remove("active-remove");
					});
				});
			}
		} else if (e.target.dataset.ullink) {
			document.querySelector(".ul-path-ext").style.display = "none";
			let elementsOfParent = Array.from(e.target.parentElement.children);
			elementsOfParent.forEach((t) => {
				t.classList.remove("li-link");
			});
			e.target.classList.add("li-link");
			if (e.target.dataset.ullink == "have") {
				document.querySelector(".ul-path-ext").style.display = "block";
			}
		} else if (e.target.dataset.ulcont) {
			e.target.classList.add("ulcontentType");
		} else if (e.target.dataset.ulapp) {
			if (e.target.dataset.ulapp == "add") {
				let element = document.createElement("li");
				let elementContent = document.createTextNode(
					document.getElementById("ul-content").value
				);
				let exts = document.querySelector(".ul-path-ext .ul-path").value;
				if (document.querySelector(".li-link").dataset.ullink == "have") {
					let elementA = document.createElement("a");
					elementA.href = exts;
					elementA.append(elementContent);
					element.append(elementA);
				} else {
					element.append(elementContent);
				}
				document.querySelector(".ul-content-preview").append(element);
			} else if (e.target.dataset.ulapp == "rem") {
				Array.from(
					document.querySelector(".ul-content-preview").childNodes
				).forEach((child) => {
					child.addEventListener("click", (e) => {
						e.target.remove();
						document
							.querySelector("[data-ulapp='rem']")
							.classList.remove("active-remove");
					});
				});
			}
		} else if (e.target.dataset.divcont) {
			document.querySelector(".div-path-ext").style.display = "none";
			let elementsOfParent = Array.from(e.target.parentElement.children);
			elementsOfParent.forEach((t) => {
				t.classList.remove("divcontentType");
			});
			e.target.classList.add("divcontentType");
			if (
				e.target.dataset.divcont == "a" ||
				e.target.dataset.divcont == "img"
			) {
				document.querySelector(".div-path-ext").style.display = "block";
			}
		} else if (e.target.dataset.divapp) {
			if (e.target.dataset.divapp == "add") {
				let elementT =
					document.querySelector(".divcontentType").dataset.divcont;
				let element = document.createElement(elementT);
				let elementContent = document.createTextNode(
					document.getElementById("div-content").value
				);
				let exts = document.querySelector(".div-path-ext .div-path").value;
				if (elementT == "a") {
					element.href = exts;
				} else if (elementT == "img") {
					element.src = exts;
					element.textContent = "";
				}
				element.append(elementContent);
				document.querySelector(".div-content-preview").append(element);
			} else if (e.target.dataset.divapp == "rem") {
				Array.from(
					document.querySelector(".div-content-preview").childNodes
				).forEach((child) => {
					child.addEventListener("click", (e) => {
						e.target.remove();
						document
							.querySelector("[data-divapp='rem']")
							.classList.remove("active-remove");
					});
				});
			}
		} else if (e.target.dataset.centercont) {
			if (e.target.dataset.centercont == "vertical") {
				document
					.getElementById(`containerNumber${lSPopupNumber}`)
					.classList.add("center-cont-vertical");
			} else if (e.target.dataset.centercont == "centerAll") {
				document
					.getElementById(`containerNumber${lSPopupNumber}`)
					.classList.add("center-cont-all");
			}
		}
	});
});
// button that show the element
document.querySelector(".adham-show").addEventListener("click", function (ev) {
	let mainElement = document.getElementById(`adhamElement${lSPopupNumber}`);
	mainElement.childNodes[0].innerHTML =
		document.querySelector(".content-preview").innerHTML;
	//  the conditions that deal with the object
	if (document.querySelector(".element").classList.contains("clicked")) {
		if (window.localStorage.popupNumber == 0) {
			document.querySelector(".inst-popup").classList.add("active-pop");
			document
				.querySelector(".inst-popup button")
				.addEventListener("click", function (e) {
					e.target.parentElement.classList.remove("active-pop");
				});
		}
		document
			.querySelectorAll("button.copy")
			.forEach((btn) => (btn.style.display = "block "));
		document.querySelectorAll(".code").forEach((code) => {
			code.style.display = "block";
		});
		if (!mainObject.sugFun) {
			mainObject.sugFun = false;
		}
		if (mainObject.overlay != true) {
			mainObject.overlay = false;
		}
		if (mainObject.center != true) {
			mainObject.center = false;
		}
		if (
			mainObject.appearReason != "start-time" &&
			mainObject.appearReason != "onclick" &&
			mainObject.appearReason != "custom"
		) {
			mainObject.appearReason = "static";
		}
		if (
			mainObject.disAppearReason != "end-time" &&
			mainObject.appearReason != "custom"
		) {
			mainObject.disAppearReason = "onclick";
			document.querySelector(
				".disappear-class"
			).textContent = `adham-btn A adham-hidden${lSPopupNumber}`;
			document.querySelector(".onclick-to-end").classList.add("show-option");
		}
		if (!mainObject.show) {
			mainObject.show = "fade-in";
		}
		for (let i = 0; i < inputs.length; i++) {
			// set the object properties to use it in the element
			Object.defineProperties(mainObject, {
				[inputs[i].dataset.property]: {
					value: inputs[i].value,
					configurable: true,
					writable: true,
					enumerable: true,
				},
			});
			// set the element properties from the object
			setProperty(
				Object.keys(mainObject)[i + 6],
				Object.values(mainObject)[i + 6]
			);
		}

		mainObject.contProps = {};
		setAllProperties(contInputs, mainObject.contProps, setContProperties);

		mainObject.childsProps = {};
		setAllProperties(
			childInputs,
			mainObject.childsProps,
			setChildrenProperties
		);

		mainObject.aProps = {};
		setAllProperties(aInputs, mainObject.aProps, setAProperties);

		mainObject.pProps = {};
		setAllProperties(pInputs, mainObject.pProps, setPProperties);

		mainObject.imgProps = {};
		setAllProperties(imgInputs, mainObject.imgProps, setImgProperties);

		mainObject.ulProps = {};
		setAllProperties(ulInputs, mainObject.ulProps, setUlProperties);

		mainObject.liProps = {};
		setAllProperties(liInputs, mainObject.liProps, setLiProperties);

		mainObject.divProps = {};
		setAllProperties(divInputs, mainObject.divProps, setDivProperties);

		mainObject.divChildsProps = {};
		setAllProperties(
			divChildsInputs,
			mainObject.divChildsProps,
			setDivChildsProperties
		);

		mainObject.top = document.getElementById("top").value;
		mainObject.left = document.getElementById("left").value;
		// function to create the overlay from the object
		mainObject.createOverlay = function () {
			if (mainObject.overlay == true) {
				let overlay = document.createElement("div");
				overlay.classList.add("adham-overlay");
				overlay.classList.add("main-overlay");
				overlay.style.cssText = `opacity: ${parseFloat(mainObject.opacity)}`;
				document.body.append(overlay);
			}
		};
		// function to center the element from the object
		mainObject.centerElement = function () {
			if (mainObject.center == true) {
				document
					.getElementById(`adhamElement${lSPopupNumber}`)
					.classList.add("centering");
			}
		};
		mainObject.centerContent = function () {
			if (mainObject.centercont == "vertical") {
			} else if (mainObject.centercont == "centerAll") {
			}
			console.log(mainObject.centercont);
		};
		mainObject.centerContent();
		// the function that shows the element
		mainObject.popupAppear = function () {
			//  the conditions that deal with the object
			if (mainObject.appearReason == "start-time") {
				mainObject.startTime =
					document.getElementById("show-the-popup").value * 1000;
				mainObject.endTime =
					document.getElementById("hidden-the-popup").value * 1000;
				setTimeout(() => {
					document.getElementById(
						`adhamElement${lSPopupNumber}`
					).style.opacity = "1";
					mainElement.style.top = mainObject.top;
					mainElement.style.left = mainObject.left;
					mainObject.createOverlay();
					mainObject.centerElement();
					if (mainObject.disAppearReason == "end-time") {
						setTimeout(() => {
							if (mainObject.show == "fade-in") {
								mainElement.style.opacity = 0;
							} else if (mainObject.show == "slide-down") {
								mainElement.style.top = "-200%";
							} else if (mainObject.show == "slide-up") {
								mainElement.style.top = "200%";
							} else if (mainObject.show == "slide-left") {
								mainElement.style.left = "200%";
							} else if (mainObject.show == "slide-right") {
								mainElement.style.left = "-200%";
							}
							if (mainObject.overlay == true) {
								document.querySelector(".main-overlay").remove();
							}
						}, document.getElementById("hidden-the-popup").value * 1000);
					}
				}, mainObject.startTime);
			} else if (
				mainObject.appearReason == "custom" &&
				mainObject.sugFun == "scrollToTop"
			) {
				window.onscroll = function () {
					if (window.scrollY >= 600) {
						mainElement.style.opacity = 1;
						mainElement.style.top = mainObject.top;
						mainElement.style.left = mainObject.left;
						mainObject.createOverlay();
						mainObject.centerElement();
					} else {
						if (mainObject.show == "fade-in") {
							mainElement.style.opacity = 0;
						} else if (mainObject.show == "slide-down") {
							mainElement.style.top = "-200%";
						} else if (mainObject.show == "slide-up") {
							mainElement.style.top = "200%";
						} else if (mainObject.show == "slide-left") {
							mainElement.style.left = "200%";
						} else if (mainObject.show == "slide-right") {
							mainElement.style.left = "-200%";
						}
						if (mainObject.overlay == true) {
							document.querySelector(".main-overlay").remove();
						}
					}
				};
				function scrollToTop() {
					window.scrollTo({
						top: 0,
						left: 0,
						behavior: "smooth",
					});
				}
				mainElement.addEventListener("click", scrollToTop);
			} else {
				mainElement.style.opacity = "1";
				mainElement.style.top = mainObject.top;
				mainElement.style.left = mainObject.left;
				mainObject.createOverlay();
				mainObject.centerElement();
				if (mainObject.disAppearReason == "end-time") {
					mainObject.endTime =
						document.getElementById("hidden-the-popup").value * 1000;
					setTimeout(() => {
						if (mainObject.show == "fade-in") {
							mainElement.style.opacity = 0;
						} else if (mainObject.show == "slide-down") {
							mainElement.style.top = "-200%";
						} else if (mainObject.show == "slide-up") {
							mainElement.style.top = "200%";
						} else if (mainObject.show == "slide-left") {
							mainElement.style.left = "200%";
						} else if (mainObject.show == "slide-right") {
							mainElement.style.left = "-200%";
						}
						if (mainObject.overlay == true) {
							document.querySelector(".main-overlay").remove();
						}
					}, document.getElementById("hidden-the-popup").value * 1000);
				}
			}
		};
		// the function that calls the popup
		callPopupMethods();
	}
});
// the button that resets the popup number
document.querySelector(".reset").addEventListener("click", () => {
	window.localStorage.clear();
});
// the button that copy the code
