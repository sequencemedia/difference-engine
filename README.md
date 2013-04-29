<h1>JONAS and The Difference Engine</h1>

<p>From 2000 onward I maintained a set of utilities which often became the "framework" underlying each project I developed in JavaScript until, having worked with several other libraries, in 2008 it was clear that jQuery had become the library of choice for JS development. By then, my framework had acquired the name JONAS but, while its mechanisms had always emphasised performance and simplicity, it didn't offer the functionality of jQuery or its competitors. I amended and updated some functionality between 2010 and 2012, but it languished until I began to realise that I had been creating another set of utilities in the same spirit across other projects.</p>

<p>I came to refer to those utilities as "The Difference Engine" with a nod toward Charles Babbage and his mechanism of that name. Where JONAS had abstracted frequently used DOM, string and number interactions, these were array utilities and alternatives either for mechanisms that existed in other libraries, but did not perform well, or mechanisms that did not exist in those libraries precisely as I needed them to.</p>

<p>These are mechanisms for manipulating, interrogating or comparing arrays. Additional mechanisms for working with objects, strings and numbers are gradually being developed or modified.</p>

<p>These utilities are suited to installed server-side applications and distributed client-side applications emphasising computational performance. They are useful where you need to iterate as fast as possible, or where processor operations are limited.</p>

<p>They are written for performance. They are <em>not</em> written to please other developers so you, reader, may balk at each and every implementation. Doubtless, there are simpler ways in JavaScript to express the same idea but I have almost certainly compared that way with the formulation I have chosen and found it to perform better.</p>

<h2>DifferenceEngine</h2>

<p>A class for comparing two arrays and returng a third array which contains:</p>

  <ol>
		<li>Elements in both arrays;</li>
		<li>Elements in the first array, but not the second;</li>
  		<li>Elements whose position has changed.</li>
  	</ol>

<p>In addition, the class has a method for describing how an element maps from the first array to the second.</p>

<em>ArrayEngine, StringEngine, NumberEngine and ObjectEngine to follow.<em>
