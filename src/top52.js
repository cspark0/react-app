//import React from 'react';
import React, { useEffect, useState } from 'react';
import './top5.css';

function App() {
	const [cdList, setCdList] = useState(
		[
			{ id: 1, src: 'images/vaughan_flood.jpg' },
			{ id: 2, src: 'images/clapton_cream.jpg' },
			{ id: 3, src: 'images/mayer_try.jpg' },
			{ id: 4, src: 'images/waters_live.jpg' },
			{ id: 5, src: 'images/house_delta.jpg' },
			{ id: 6, src: 'images/cream_live.jpg' },
			{ id: 7, src: 'images/shepherd_ledbetter.jpg' },
			{ id: 8, src: 'images/johnson_complete.jpg' },
			{ id: 9, src: 'images/hendrix_experience.jpg' },
			{ id: 10, src: 'images/jorma_blues.jpg' },
			{ id: 11, src: 'images/johnson_wizard.jpg' },
			{ id: 12, src: 'images/lang_lie.jpg' }
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
						let newCdList = cdList.filter(cd => (cd !== selected_cd));
							// selected_cd가 아닌 cd들만 추출해서 새로운 배열 생성 및 반환						
						setCdList(newCdList);
						let newSelectedList = selectedList.concat(selected_cd);	// 새로운 배열 생성 및 반환
						setSelectedList(newSelectedList);
					}
					else {
						alert("You already have 5 cdList. Click \"Start Over\" to try again.");
					}
				}}
			/>
			<Top5Listings name="Jain" images={selectedList}
				onClickImage={function(selectedCd) {			
					let newSelectedList = selectedList.filter(cd => (cd !== selectedCd));
						// selectedCd가 아닌 cd들만 추출해서 새로운 배열 생성 및 반환						
					setSelectedList(newSelectedList);
				
					let list = Array.from(cdList); 	// 또는 [...cdList];	// 배열 복사
					let i = list.findIndex(cd => (cd.id > selectedCd.id));  
						// id가 selectedCd.id 보다 큰 첫 번째 cd의 index 반환
					if (i >= 0) list.splice(i, 0, selectedCd);	 // selectedCd를 list의 i 위치에 삽입해서 반환
					else list.push(selectedCd);	 // selectedCd를 list의 마지막에 추가
					setCdList(list);
				}}
			/>
			<form>
				<input type="button" value="Start Over"
					onClick={e => {
						let list = Array.from(cdList); 	// 또는 [...cdList];		// 배열 복사
						
						for (let selectedCd of selectedList) {						
							let i = list.findIndex(cd => (cd.id > selectedCd.id));   // 삽입할 위치(index) 반환
							if (i >= 0) list.splice(i, 0, selectedCd);	 // selectedCd를 list의 i 위치에 삽입해서 반환
							else list.push(selectedCd);	 // selectedCd를 list의 마지막에 추가
						}						
						setCdList(list);
						setSelectedList([]);
					}} />
			</form>
		</>
	);
}

function CDs({ images, onClickImage }) {
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

function Top5Listings({ name, images, onClickImage }) {
	console.log('==> Top5Listings render');
	return (
		<div id="top5-listings">
			<h2>{name}'s Top 5 CD List</h2>
			<Top5 images={images} onClickImage={onClickImage}/>
		</div>
	);
}

function Top5({ images, onClickImage }) {
	console.log('==> Top5 render');

	var imgTags = images.map(
		(image, i) => (
			<span key={image.id}>
				<span className="rank">{i + 1}</span>
				<img src={image.src} className="cover" alt=""					
					onClick={e => {
						console.log(e);
						e.preventDefault();
						onClickImage(image);
					}}
				/>
			</span>
		)
	);

	return (
		<div id="top5">
			{imgTags}
		</div>
	);
}

export default App;
