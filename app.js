// Dummy data
const fakeData = [
	{
		name: 'John Doe',
		age: 32,
		gender: 'male',
		lookingfor: 'female',
		location: 'Boston MA',
		image: 'https://randomuser.me/api/portraits/men/82.jpg'
	},
	{
		name: 'Jen Smith',
		age: 26,
		gender: 'female',
		lookingfor: 'male',
		location: 'Miami FL',
		image: 'https://randomuser.me/api/portraits/women/82.jpg'
	},
	{
		name: 'William Johnson',
		age: 38,
		gender: 'male',
		lookingfor: 'female',
		location: 'Lynn MA',
		image: 'https://randomuser.me/api/portraits/men/83.jpg'
	}
];

// Inst
const profiles = profileIterator(fakeData);

//Call  Manuel load
nextProfile();

// event listener
document.getElementById('next').addEventListener('click', nextProfile);

// Function Next Profile
function nextProfile() {
	const current = profiles.next().value;

	if (current !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
		<ul class="list-group">
		<li class="list-group-item">Name: ${current.name}</li>
		<li class="list-group-item">Age: ${current.age}</li>
		<li class="list-group-item">Location :${current.location}</li>
		<li class="list-group-item"> Gender: ${current.gender}</li>
		<li class="list-group-item"> Looking For: ${current.lookingfor}</li>
		</ul>
		`;
		document.getElementById('imageDisplay').innerHTML = `<img src="${current.image}">`;
	} else {
		window.location.reload();
	}
}



// Profile Iterator
function profileIterator(profileData) {
	let index = 0;

	return {
		next: function () {

			return index < profileData.length ?
				{ value: profileData[index++], done: false }

				:
				{ done: true }
		}

	};
}