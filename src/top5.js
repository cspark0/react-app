//import React from 'react';
import React, { useEffect, useState } from 'react';
import './top5.css';

function App() {
	const [cdList, setCdList] = useState(
		[
			{id: 1, src: 'images/vaughan_flood.jpg'},
			{id: 2, src: 'images/clapton_cream.jpg'},
			{id: 3, src: 'images/mayer_try.jpg'},
			{id: 4, src: 'images/waters_live.jpg'},
			{id: 5, src: 'images/house_delta.jpg'},
			{id: 6, src: 'images/cream_live.jpg'},
			{id: 7, src: 'images/shepherd_ledbetter.jpg'},
			{id: 8, src: 'images/johnson_complete.jpg'},
			{id: 9, src: 'images/hendrix_experience.jpg'},
			{id: 10, src: 'images/jorma_blues.jpg'},
			{id: 11, src: 'images/johnson_wizard.jpg'},
			{id: 12, src: 'images/lang_lie.jpg'}
		]); 
	const [selectedList, setSelectedList] = useState([]); 
	
	const instr = `Click on a CD cover to add it to the Top 5 list
		If you want to start over, click the "Start Over" button to clear the Top 5 list.`;

	return (
		<>
			<div id="instructions">{instr}</div>
			<CDs images={cdList} 
        onClickImage={function(selected_cd) {        
					if (selectedList.length < 5) {
						var newcdList = cdList.filter(cd => (cd !== selected_cd)); 
					  	// id가 selectedId와 같지 않은 cd들만 추출해서 새로운 배열 생성 및 반환						
						setCdList(newcdList);	
						var newSelectedList = selectedList.concat(selected_cd);
						setSelectedList(newSelectedList);
					}
					else {
						alert("You already have 5 cdList. Click \"Start Over\" to try again.");
					}
				}}  
      />
			<Top5Listings images={selectedList}/>			
			<form>
				<input type="button" value="Start Over" 
					onClick={e => {
						var newcdList = cdList.concat(selectedList);
						setCdList(newcdList);
						setSelectedList([]);
					}} />
			</form>
		</>
	);
}

function CDs({images, onClickImage}) {  	
	console.log('==> CDs render');
	var imgTags = images.map(image => 
		<img key={image.id} src={image.src} className="cover" alt=""
			onClick={e => {
				console.log(e);
				e.preventDefault();
				onClickImage(image);
			}}
		/>	
	);    
	
	return (
		<div id="cds">
			{imgTags}
		</div>
	);
}

function Top5Listings({images}) {
	return (
		<div id="top5-listings">
			<h2>My Top 5 cdList</h2>
			<Top5 images={images} />
		</div>
	);
}

function Top5({images}) {
	var imgTags = images.map(
		(image, i) => (
			<>
				<span className="rank">{i+1}</span>
				<img key={image.id} src={image.src} className="cover" alt=""
					/*
					onClick={e => {
						console.log(e);
						e.preventDefault();
						onClickImage(image);
					}}*/			
				/>
			</>				
		)
	);     
				
	return (		
		<div id="top5">
			{imgTags}	
		</div>
	);
}

export default App;

/*
function addOnClickHandlers() {
	var cdListDiv = document.getElementById("cdList");
	var cdImages = cdListDiv.getElementsByTagName("img");
	for (var i = 0; i < cdImages.length; i++) {
		cdImages[i].onclick = addToTop5;
	}
}

function addToTop5() {
	var imgElement = this;
	var top5Element = document.getElementById("top5");
	var numcdList = 0;

	for (var i = 0; i < top5Element.childNodes.length; i++) {
		if (top5Element.childNodes[i].nodeName.toLowerCase() == "img") {
			numcdList = numcdList + 1;
		}
	}
	if (numcdList >= 5) {
		alert("You already have 5 cdList. Click \"Start Over\" to try again.");
		return;
	}

	top5Element.appendChild(imgElement);
	imgElement.onclick = null;
	// imgElement.onclick = moveToOriginalPosition; // 선택된 이미지를 제자리로 이동시킴

	var newSpanElement = document.createElement("span");
	newSpanElement.className = "rank";
	var newTextElement = document.createTextNode(numcdList + 1);
	newSpanElement.appendChild(newTextElement);
	top5Element.insertBefore(newSpanElement, imgElement);
}

function startOver() {
	var top5Element = document.getElementById("top5");
	var cdListElement = document.getElementById("cdList");
	while (top5Element.hasChildNodes()) {
		var firstChild = top5Element.firstChild;
		if (firstChild.nodeName.toLowerCase() == "img") {
			cdListElement.appendChild(firstChild);
		} else {
			top5Element.removeChild(firstChild);
		}
	}

	addOnClickHandlers();
}

function moveToOriginalPosition() { // 선택된 이미지를 제자리로 이동시킴
	var imgElement = this; // 선택된 <img> 엘리먼트
	var cdList = document.getElementById("cdList");

	// cdList의 <img>들 중 id 값이 imgElement의 id 값보다 크면서 가장 가까운 것을 찾음

	// imgElement의 순위를 나타내는 <span>을 삭제

	// imgElement를 cdList의 제 위치에 삽입 (주의: imgElement가 마지막 이미지인 경우)

	// imgElement에 대해 onclick 이벤트 핸들러 재설정

	// top5 이미지들의 순위 값을 재계산하여 변경

}
*/

