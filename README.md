JONAS and The Difference Engine
================

From 2000 onward I maintained a set of utilities which often became the "framework" underlying each project I developed in JavaScript until, having worked with several other libraries, in 2008 it was clear that jQuery had become the library of choice for JS development. By then, my framework had acquired the name JONAS but, while its mechanisms had always emphasised performance and simplicity, it didn't offer the functionality of jQuery or its competitors. I amended and updated some functionality between 2010 and 2012, but it languished until I began to realise that I had been creating another set of utilities in the same spirit across other projects. 

I came to refer to those utilities as "The Difference Engine" with a nod toward Charles Babbage and his mechanism of that name. Where JONAS had abstracted frequently used DOM, string and number interactions, these were array utilities and alternatives either for mechanisms that existed in other libraries, but did not perform well, or mechanisms that did not exist in those libraries precisely as I need them to.

Primarily, these are mechinisms for manipulating, interrogating or comparing arrays. I have begun to create additional mechanisms for working with objects, strings and numbers but they are a secondary concern, currently.

These utilities are suited to installed server-side applications and distributed client-side applications where the concern is for computational performance. They are useful where you need to iterate as fast as possible, or where processor operations are limited. 

They are written for performance. They are not written to please other developers so you, reader, may balk at each and every implementation. Doubtless, there are simpler ways in JavaScript to express the same idea but I have almost certainly compared that way with the formulation here and found this to perform faster.

DifferenceEngine
================

A class for comparing two arrays and returng a third array which contains:

  1.  Elements in both arrays;
  2.  Elements in the first array, but not the second;
  3.  Elements whose position has changed.

In addition, the class has a method for describing how an element maps from the first array to the second.
