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
var qtySample = 35;
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
    iterations: 100,
    error: .1,
    log: 1,
    cost: Trainer.cost.CROSS_ENTROPY
});


console.log('\n 36 Resultado esperado: Reumatica = 2 |  Resultado: ' + myPerceptron.activate([0,0,0,0.3,0,0.25,0.5,0,1,0,0,0,1,1,0,0,0]));
console.log('\n 37 Resultado esperado: Não tem = 0 | Resultado: ' + myPerceptron.activate([0,0,0,0.7,0,0,0,0,0,0,0,0,0,0,0,0,0]));
console.log('\n 38 Resultado esperado: Gota = 1 | Resultado: ' + myPerceptron.activate([0,0,0,0.3,0,0.5,0.5,0,1,0,0,1,0,1,0,0,0]));
console.log('\n 39 Resultado esperado: Anquilosante = 3 |  Resultado: ' + myPerceptron.activate([1,1,1,0.3,0,0.5,1,0.6,1,0,0,0,0,1,0,1,1]));
console.log('\n 40 Resultado esperado: Gota = 1 | Resultado: ' + myPerceptron.activate([0,0,0,0.7,0,0.25,0.75,0,1,0,0,1,1,1,0,0,0]));
console.log('\n 41 Resultado esperado: Anquilosante = 1 | Resultado: ' + myPerceptron.activate([1,0,0,0.7,0,0,0.5,0.6,0,0,0,0,0,1,0,1,0]));
console.log('\n 42 Resultado esperado: Reumatica = 2 |  Resultado: ' + myPerceptron.activate([1,1,0,0.7,0,0,0.25,0,0,1,0,0,0,1,0,0,0]));
console.log('\n 43 Resultado esperado: Anquilosante = 3 |  Resultado: ' + myPerceptron.activate([1,1,1,0.7,0,0,0.75,0,0,0,0,0,0,0,0,1,0]));
console.log('\n 44 Resultado esperado: Anquilosante = 3 |  Resultado: ' + myPerceptron.activate([1,0,0,0.7,1,0.5,0.75,0,0,1,0,0,0,0,0,1,0]));
console.log('\n 45 Resultado esperado: Reumatica = 2 |  Resultado: ' + myPerceptron.activate([0,0,0,0.3,0,0.25,0.75,0,1,1,0,0,1,1,0,0,0]));
console.log('\n 46 Resultado esperado: Reumatica = 2 |  Resultado: ' + myPerceptron.activate([0,0,0,0.3,0,0.25,0.5,0,1,1,0,0,1,1,0,0,0]));
console.log('\n 47 Resultado esperado: Reumatica = 2 |  Resultado: ' + myPerceptron.activate([0,0,0,0.3,0,0.5,0.75,0,1,0,0,0,1,1,0,0,0]));
console.log('\n 48 Resultado esperado: Reumatica = 2|  Resultado: ' + myPerceptron.activate([0,0,0,0.7,0,0.75,0.75,0,0,1,0,0,0,1,0,0,0]));
console.log('\n 49 Resultado esperado: Gota = 1 |  Resultado: ' + myPerceptron.activate([1,0,0,0.7,0,0.25,0.75,0,1,0,0,0,1,1,0,0,0]));
console.log('\n 50 Resultado esperado: Reumatica = 2 |  Resultado: ' + myPerceptron.activate([0,0,0,0.7,0,0.5,0.75,0,0,1,0,0,0,1,0,0,0]));


