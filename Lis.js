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

var qtyInput = 4;
var qtySample = 100;
var qtyOutput = 3;
var qtyHidden = 10;

var myPerceptron = new Perceptron(qtyInput, qtyHidden, qtyOutput);
var myTrainer = new Trainer(myPerceptron);

//Pos 1 = Setosa
//Pos 2 = Versicolor
//Pos 3 = Virginia

var trainingSet = [
    { input: [4.8, 3.1, 1.6, 0.2], output: [1, 0, 0] },
    { input: [5.5, 2.4, 3.8, 1.1], output: [0, 1, 0] },
    { input: [7.4, 2.8, 6.1, 1.9], output: [0, 0, 1] },
    { input: [5.4, 3.4, 1.5, 0.4], output: [1, 0, 0] },
    { input: [5.5, 2.4, 3.7, 1.0], output: [0, 1, 0] },
    { input: [7.9, 3.8, 6.4, 2.0], output: [0, 0, 1] },
    { input: [5.2, 4.1, 1.5, 0.1], output: [1, 0, 0] },
    { input: [5.8, 2.7, 3.9, 1.2], output: [0, 1, 0] },
    { input: [6.4, 2.8, 5.6, 2.2], output: [0, 0, 1] },
    { input: [5.5, 4.2, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.0, 2.7, 5.1, 1.6], output: [0, 1, 0] },
    { input: [6.3, 2.8, 5.1, 1.5], output: [0, 0, 1] },
    { input: [4.9, 3.1, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.4, 3.0, 4.5, 1.5], output: [0, 1, 0] },
    { input: [6.1, 2.6, 5.6, 1.4], output: [0, 0, 1] },
    { input: [5.0, 3.2, 1.2, 0.2], output: [1, 0, 0] },
    { input: [6.0, 3.4, 4.5, 1.6], output: [0, 1, 0] },
    { input: [7.7, 3.0, 6.1, 2.3], output: [0, 0, 1] },
    { input: [5.5, 3.5, 1.3, 0.2], output: [1, 0, 0] },
    { input: [6.7, 3.1, 4.7, 1.5], output: [0, 1, 0] },
    { input: [6.3, 3.4, 5.6, 2.4], output: [0, 0, 1] },
    { input: [4.9, 3.6, 1.4, 0.1], output: [1, 0, 0] },
    { input: [6.3, 2.3, 4.4, 1.3], output: [0, 1, 0] },
    { input: [6.4, 3.1, 5.5, 1.8], output: [0, 0, 1] },
    { input: [4.4, 3.0, 1.3, 0.2], output: [1, 0, 0] },
    { input: [5.6, 3.0, 4.1, 1.3], output: [0, 1, 0] },
    { input: [6.0, 3.0, 4.8, 1.8], output: [0, 0, 1] },
    { input: [5.1, 3.4, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.5, 2.5, 4.0, 1.3], output: [0, 1, 0] },
    { input: [6.9, 3.1, 5.4, 2.1], output: [0, 0, 1] },
    { input: [5.0, 3.5, 1.3, 0.3], output: [1, 0, 0] },
    { input: [5.5, 2.6, 4.4, 1.2], output: [0, 1, 0] },
    { input: [6.7, 3.1, 5.6, 2.4], output: [0, 0, 1] },
    { input: [4.5, 2.3, 1.3, 0.3], output: [1, 0, 0] },
    { input: [6.1, 3.0, 4.6, 1.4], output: [0, 1, 0] },
    { input: [6.9, 3.1, 5.1, 2.3], output: [0, 0, 1] },
    { input: [4.4, 3.2, 1.3, 0.2], output: [1, 0, 0] },
    { input: [5.8, 2.6, 4.0, 1.2], output: [0, 1, 0] },
    { input: [5.8, 2.7, 5.1, 1.9], output: [0, 0, 1] },
    { input: [5.0, 3.5, 1.6, 0.6], output: [1, 0, 0] },
    { input: [5.0, 2.3, 3.3, 1.0], output: [0, 1, 0] },
    { input: [6.8, 3.2, 5.9, 2.3], output: [0, 0, 1] },
    { input: [5.1, 3.8, 1.9, 0.4], output: [1, 0, 0] },
    { input: [5.6, 2.7, 4.2, 1.3], output: [0, 1, 0] },
    { input: [6.7, 3.3, 5.7, 2.5], output: [0, 0, 1] },
    { input: [4.8, 3.0, 1.4, 0.3], output: [1, 0, 0] },
    { input: [5.7, 3.0, 4.2, 1.2], output: [0, 1, 0] },
    { input: [6.7, 3.0, 5.2, 2.3], output: [0, 0, 1] },
    { input: [5.1, 3.8, 1.6, 0.2], output: [1, 0, 0] },
    { input: [5.7, 2.9, 4.2, 1.3], output: [0, 1, 0] },
    { input: [6.3, 2.5, 5.0, 1.9], output: [0, 0, 1] },
    { input: [4.6, 3.2, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.2, 2.9, 4.3, 1.3], output: [0, 1, 0] },
    { input: [6.5, 3.0, 5.2, 2.0], output: [0, 0, 1] },
    { input: [5.3, 3.7, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.1, 2.5, 3.0, 1.1], output: [0, 1, 0] },
    { input: [6.2, 3.4, 5.4, 2.3], output: [0, 0, 1] },
    { input: [5.0, 3.3, 1.4, 0.2], output: [1, 0, 0] },
    { input: [5.7, 2.8, 4.1, 1.3], output: [0, 1, 0] },
    { input: [5.9, 3.0, 5.1, 1.8], output: [0, 0, 1] },
    { input: [5.1, 3.5, 1.4, 0.2], output: [1, 0, 0] },
    { input: [7.0, 3.2, 4.7, 1.4], output: [0, 1, 0] },
    { input: [6.3, 3.3, 6.0, 2.5], output: [0, 0, 1] },
    { input: [4.9, 3.0, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.4, 3.2, 4.5, 1.5], output: [0, 1, 0] },
    { input: [5.8, 2.7, 5.1, 1.9], output: [0, 0, 1] },
    { input: [4.7, 3.2, 1.3, 0.2], output: [1, 0, 0] },
    { input: [6.9, 3.1, 4.9, 1.5], output: [0, 1, 0] },
    { input: [7.1, 3.0, 5.9, 2.1], output: [0, 0, 1] },
    { input: [4.6, 3.1, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.5, 2.3, 4.0, 1.3], output: [0, 1, 0] },
    { input: [6.3, 2.9, 5.6, 1.8], output: [0, 0, 1] },
    { input: [5.0, 3.6, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.5, 2.8, 4.6, 1.5], output: [0, 1, 0] },
    { input: [6.5, 3.0, 5.8, 2.2], output: [0, 0, 1] },
    { input: [5.4, 3.9, 1.7, 0.4], output: [1, 0, 0] },
    { input: [5.7, 2.8, 4.5, 1.3], output: [0, 1, 0] },
    { input: [7.6, 3.0, 6.6, 2.1], output: [0, 0, 1] },
    { input: [4.6, 3.4, 1.4, 0.3], output: [1, 0, 0] },
    { input: [6.3, 3.3, 4.7, 1.6], output: [0, 1, 0] },
    { input: [4.9, 2.5, 4.5, 1.7], output: [0, 0, 1] },
    { input: [5.0, 3.4, 1.5, 0.2], output: [1, 0, 0] },
    { input: [4.9, 2.4, 3.3, 1.0], output: [0, 1, 0] },
    { input: [7.3, 2.9, 6.3, 1.8], output: [0, 0, 1] },
    { input: [4.4, 2.9, 1.4, 0.2], output: [1, 0, 0] },
    { input: [6.6, 2.9, 4.6, 1.3], output: [0, 1, 0] },
    { input: [6.7, 2.5, 5.8, 1.8], output: [0, 0, 1] },
    { input: [4.9, 3.1, 1.5, 0.1], output: [1, 0, 0] },
    { input: [5.2, 2.7, 3.9, 1.4], output: [0, 1, 0] },
    { input: [7.2, 3.6, 6.1, 2.5], output: [0, 0, 1] },
    { input: [5.4, 3.7, 1.5, 0.2], output: [1, 0, 0] },
    { input: [5.0, 2.0, 3.5, 1.0], output: [0, 1, 0] },
    { input: [6.5, 3.2, 5.1, 2.0], output: [0, 0, 1] },
    { input: [4.8, 3.4, 1.6, 0.2], output: [1, 0, 0] },
    { input: [5.9, 3.0, 4.2, 1.5], output: [0, 1, 0] },
    { input: [6.4, 2.7, 5.3, 1.9], output: [0, 0, 1] },
    { input: [4.8, 3.0, 1.4, 0.1], output: [1, 0, 0] },
    { input: [6.0, 2.2, 4.0, 1.0], output: [0, 1, 0] },
    { input: [6.8, 3.0, 5.5, 2.1], output: [0, 0, 1] },
    { input: [4.3, 3.0, 1.1, 0.1], output: [1, 0, 0] },
]

myTrainer.train(trainingSet, {
    rate: .05,
    iterations: 200,
    error: .1,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});

console.log('\n 101  2 |  Resultado: ' + myPerceptron.activate([6.1,2.9,4.7,1.4]));
console.log('\n 102  3 |  Resultado: ' + myPerceptron.activate([5.7,2.5,5.0,2.0]));
console.log('\n 103  1 |  Resultado: ' + myPerceptron.activate([5.8,4.0,1.2,0.2]));
console.log('\n 104  2 |  Resultado: ' + myPerceptron.activate([5.6,2.9,3.6,1.3]));
console.log('\n 105  3 |  Resultado: ' + myPerceptron.activate([5.8,2.8,5.1,2.4]));
console.log('\n 106  1 |  Resultado: ' + myPerceptron.activate([5.7,4.4,1.5,0.4]));
console.log('\n 107  2 |  Resultado: ' + myPerceptron.activate([6.7,3.1,4.4,1.4]));
console.log('\n 108  3 |  Resultado: ' + myPerceptron.activate([6.4,3.2,5.3,2.3]));
console.log('\n 109  1 |  Resultado: ' + myPerceptron.activate([5.4,3.9,1.3,0.4]));
console.log('\n 110  2 |  Resultado: ' + myPerceptron.activate([5.6,3.0,4.5,1.5]));
console.log('\n 111  3 |  Resultado: ' + myPerceptron.activate([6.5,3.0,5.5,1.8]));
console.log('\n 112  1 |  Resultado: ' + myPerceptron.activate([5.1,3.5,1.4,0.3]));
console.log('\n 113  2 |  Resultado: ' + myPerceptron.activate([5.8,2.7,4.1,1.0]));
console.log('\n 114  3 |  Resultado: ' + myPerceptron.activate([7.7,3.8,6.7,2.2]));
console.log('\n 115  1 |  Resultado: ' + myPerceptron.activate([5.7,3.8,1.7,0.3]));
console.log('\n 116  2 |  Resultado: ' + myPerceptron.activate([5.2,2.2,4.5,1.5]));
console.log('\n 117  3 |  Resultado: ' + myPerceptron.activate([7.7,2.6,6.9,2.3]));
console.log('\n 118  1 |  Resultado: ' + myPerceptron.activate([5.1,3.8,1.5,0.3]));
console.log('\n 119  2 |  Resultado: ' + myPerceptron.activate([5.6,2.5,3.9,1.1]));
console.log('\n 120  3 |  Resultado: ' + myPerceptron.activate([6.0,2.2,5.0,1.5]));
console.log('\n 121  1 |  Resultado: ' + myPerceptron.activate([5.4,3.4,1.7,0.2]));
console.log('\n 122  2 |  Resultado: ' + myPerceptron.activate([5.9,3.2,4.8,1.8]));
console.log('\n 123  3 |  Resultado: ' + myPerceptron.activate([6.9,3.2,5.7,2.3]));
console.log('\n 124  1 |  Resultado: ' + myPerceptron.activate([5.1,3.7,1.5,0.4]));
console.log('\n 125  2 |  Resultado: ' + myPerceptron.activate([6.1,2.8,4.0,1.3]));
console.log('\n 126  3 |  Resultado: ' + myPerceptron.activate([5.6,2.8,4.9,2.0]));
console.log('\n 127  1 |  Resultado: ' + myPerceptron.activate([4.6,3.6,1.0,0.2]));
console.log('\n 128  2 |  Resultado: ' + myPerceptron.activate([6.3,2.5,4.9,1.5]));
console.log('\n 129  3 |  Resultado: ' + myPerceptron.activate([7.7,2.8,6.7,2.0]));
console.log('\n 130  1 |  Resultado: ' + myPerceptron.activate([5.1,3.3,1.7,0.5]));
console.log('\n 131  2 |  Resultado: ' + myPerceptron.activate([6.1,2.8,4.7,1.2]));
console.log('\n 132  3 |  Resultado: ' + myPerceptron.activate([6.3,2.7,4.9,1.8]));
console.log('\n 133  1 |  Resultado: ' + myPerceptron.activate([4.8,3.4,1.9,0.2]));
console.log('\n 134  2 |  Resultado: ' + myPerceptron.activate([6.4,2.9,4.3,1.3]));
console.log('\n 135  3 |  Resultado: ' + myPerceptron.activate([6.7,3.3,5.7,2.1]));
console.log('\n 136  1 |  Resultado: ' + myPerceptron.activate([5.0,3.0,1.6,0.2]));
console.log('\n 137  2 |  Resultado: ' + myPerceptron.activate([6.6,3.0,4.4,1.4]));
console.log('\n 138  3 |  Resultado: ' + myPerceptron.activate([7.2,3.2,6.0,1.8]));
console.log('\n 139  1 |  Resultado: ' + myPerceptron.activate([5.0,3.4,1.6,0.4]));
console.log('\n 140  2 |  Resultado: ' + myPerceptron.activate([5.8,2.8,4.8,1.4]));
console.log('\n 141  3 |  Resultado: ' + myPerceptron.activate([6.2,2.8,4.8,1.8]));
console.log('\n 142  1 |  Resultado: ' + myPerceptron.activate([5.2,3.5,1.5,0.2]));
console.log('\n 143  2 |  Resultado: ' + myPerceptron.activate([6.7,3.0,5.0,1.7]));
console.log('\n 144  3 |  Resultado: ' + myPerceptron.activate([6.1,3.0,4.9,1.8]));
console.log('\n 145  1 |  Resultado: ' + myPerceptron.activate([5.2,3.4,1.4,0.2]));
console.log('\n 146  2 |  Resultado: ' + myPerceptron.activate([6.0,2.9,4.5,1.5]));
console.log('\n 147  3 |  Resultado: ' + myPerceptron.activate([6.4,2.8,5.6,2.1]));
console.log('\n 148  1 |  Resultado: ' + myPerceptron.activate([4.7,3.2,1.6,0.2]));
console.log('\n 149  2 |  Resultado: ' + myPerceptron.activate([5.7,2.6,3.5,1.0]));
console.log('\n 150  3 |  Resultado: ' + myPerceptron.activate([7.2,3.0,5.8,1.6]));

