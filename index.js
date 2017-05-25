var synaptic = require('synaptic');
var Neuron = synaptic.Neuron,
    Layer = synaptic.Layer,
    Network = synaptic.Network,
    Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;

function Perceptron(input, hidden, output) {
    var inputLayer = new Layer(input);
    var hiddenLayer = new Layer(hidden);
    var outputLayer = new Layer(output);

    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);

    this.set({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
}

Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

var qtyInput = 17;
var qtySample = 50;
var qtyOutput = 1;
var qtyHidden = 5;

var myPerceptron = new Perceptron(qtyInput, qtyHidden, qtyOutput);
var myTrainer = new Trainer(myPerceptron);

var trainingSet = [
    {
        input: [1, 1, 1, .3, 1, 0, .5, .6, 0, 0, 0, 0, 0, 0, 0, .5, 0],
        output: [1]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0.5, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0.5, 0, 0.6, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.3, 0, 1, 1, 0.9, 1, 0, 0, 1, 1, 1, 0, 0, 0],
        output: [0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0.5, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        output: [1]
    },
    {
        input: [1, 0, 1, 0.7, 1, 0.5, 0, 0.9, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [3]
    },
    {
        input: [1, 1, 1, 0.3, 1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [1]
    },
    {
        input: [0, 0, 0, 0.3, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        output: [3]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0.3, 1, 1, 0, 0, 1, 1, 0, 0.5, 0],
        output: [2]
    },
    {
        input: [1, 0, 0, 0.7, 0, 0.25, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0],
        output: [3]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0.25, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        output: [3]
    },
    {
        input: [1, 0, 0, 0.7, 0, 0.5, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0.6, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        output: [2]
    },
    {
        input: [1, 1, 0, 0.7, 1, 0, 0.5, 0.3, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        output: [2]
    },
    {
        input: [1, 0, 1, 0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        output: [1]
    },
    {
        input: [1, 1, 0, 0.7, 0, 0.25, 0, 0.9, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0.5, 0.5, 0.6, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        output: [3]
    },//21
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0.6, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        output: [1]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
        output: [1]
    },
    {
        input: [1, 1, 0, 0.7, 1, 0, 0, 0.9, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0.5, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        output: [1]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0.5, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        output: [2]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0.5, 0],
        output: [3]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0.5, 0.6, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        output: [3]
    },
    {
        input: [1, 0, 0, 0.7, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [1]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0.5, 0],
        output: [2]
    }
]


myTrainer.train(trainingSet);

var seucu = [0,0,0,0.7,0,0.5,0.75,0,0,1,0,0,0,1,0,0,0];
console.log(seucu.length);

console.log(myPerceptron.activate(seucu));

// 1	0	0	0,7	1	0,5	0,75	0	0	1	0	0	0	0	0	1	0


// [
//   [0,0,0,0.7,0,0.25,0.75,0,1,0,0,1,1,1,0,0,0,1,0,0,0],
//   [1,0,0,0.7,0,0,0.5,0.6,0,0,0,0,0,1,0,1,0,0,0,1,0],
//   [1,1,0,0.7,0,0,0.25,0,0,1,0,0,0,1,0,0,0,0,1,0,0],
//   [1,1,1,0.7,0,0,0.75,0,0,0,0,0,0,0,0,1,0,0,0,1,0],
//   [1,0,0,0.7,1,0.5,0.75,0,0,1,0,0,0,0,0,1,0,0,0,1,0],
//   [0,0,0,0.3,0,0.25,0.75,0,1,1,0,0,1,1,0,0,0,0,1,0,0],
//   [0,0,0,0.3,0,0.25,0.5,0,1,1,0,0,1,1,0,0,0,0,1,0,0],
//   [0,0,0,0.3,0,0.5,0.75,0,1,0,0,0,1,1,0,0,0,0,1,0,0],
//   [0,0,0,0.7,0,0.75,0.75,0,0,1,0,0,0,1,0,0,0,0,1,0,0],
//   [1,0,0,0.7,0,0.25,0.75,0,1,0,0,0,1,1,0,0,0,1,0,0,0],
//   [0,0,0,0.7,0,0.5,0.75,0,0,1,0,0,0,1,0,0,0,0,1,0,0]
// ]