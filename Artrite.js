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

var qtyInput = 35;
var qtySample = 28;
var qtyOutput = 4;
var qtyHidden = 5;

var myPerceptron = new Perceptron(qtyInput, qtyHidden, qtyOutput);
var myTrainer = new Trainer(myPerceptron);


//Pos 1 = Gota
//Pos 2 = Reumatica
//Pos 3 = Ankylosante
//Pos 4 = Não Tem

var trainingSet = [
    {
        input: [1, 1, 1, .3, 1, 0, .5, .6, 0, 0, 0, 0, 0, 0, 0, .5, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0.5, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0.5, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0.5, 0, 0.6, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 1, 1, 0.9, 1, 0, 0, 1, 1, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0.5, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [1, 0, 1, 0.7, 1, 0.5, 0, 0.9, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [1, 1, 1, 0.3, 1, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0.3, 1, 1, 0, 0, 1, 1, 0, 0.5, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [1, 0, 0, 0.7, 0, 0.25, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0.25, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [1, 0, 0, 0.7, 0, 0.5, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0.6, 1, 1, 0, 0, 1, 1, 0, 0, 1],
        output: [0, 1, 0, 0]
    },
    {
        input: [1, 1, 0, 0.7, 1, 0, 0.5, 0.3, 0, 1, 0, 0, 0, 0, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [1, 0, 1, 0.7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [1, 1, 0, 0.7, 0, 0.25, 0, 0.9, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0.5, 0.5, 0.6, 1, 0, 0, 0, 0, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0.6, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [1, 1, 0, 0.7, 1, 0, 0, 0.9, 0, 1, 0, 0, 0, 1, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0.5, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0.5, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0],
        output: [1, 0, 0, 0]
    },
    {
        input: [0, 0, 0, 0.7, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0.5, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0.5, 0.6, 1, 0, 0, 0, 1, 1, 0, 0, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [1, 0, 0, 0.7, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0.5, 0],
        output: [0, 1, 0, 0] //28
    },
    {
        input: [1, 1, 0, 0.3, 1, 0.25, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.5, 0],
        output: [0, 0, 1, 0]
    },
    {
        input: [0, 0, 0, 0.3, 0, 0, 0.5, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        output: [0, 1, 0, 0]
    },
    {
        input: [1, 1, 0, 0.3, 0, 0, 0.5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        output: [0, 0, 1, 0]

    },
    {
        input: [1, 0, 0, 0.7, 0, 0, 0.5, 0.6, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        output: [1, 0, 0, 0]

    },
    {
        input: [0, 0, 0, 0.3, 0, 0.5, 0.5, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0],
        output: [1, 0, 0, 0]

    },
    {
        input: [1, 1, 0, 0.3, 1, 0.75, 1, 0.9, 1, 1, 0, 0, 1, 1, 0, 0, 0],
        output: [0, 1, 0, 0]

    },
    {
        input: [0, 0, 0, 0.3, 0, 1, 0.25, 0.6, 1, 1, 0, 0, 1, 1, 1, 0, 0],
        output: [0, 1, 0, 0]

    }
]

myTrainer.train(trainingSet, {
    rate: .2,
    iterations: 80,
    error: .1,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});

console.log(myPerceptron.activate([1, 1, 0, 0.3, 1, 0.25, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0.5, 0])); //29 Deu Bom

console.log(myPerceptron.activate([0, 0, 0, 0.3, 0, 0, 0.5, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0])); //30 Deu Bom

