var contract;
var address = "0x1faa27a2c63fc63f09b06131e3f0a983a7cfa87b";
var abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "adr",
                type: "address",
            },
        ],
        name: "addAdmin",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "_rollno",
                type: "int256",
            },
        ],
        name: "addAttendance",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "_rollno",
                type: "int256",
            },
            {
                internalType: "string",
                name: "_name",
                type: "string",
            },
            {
                internalType: "int256",
                name: "_attendance",
                type: "int256",
            },
        ],
        name: "addStudent",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "int256",
                name: "_rollno",
                type: "int256",
            },
        ],
        name: "viewAttendance",
        outputs: [
            {
                components: [
                    {
                        internalType: "int256",
                        name: "rollno",
                        type: "int256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "int256",
                        name: "attendance",
                        type: "int256",
                    },
                ],
                internalType: "struct MyAttendance.Student1",
                name: "",
                type: "tuple",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];

web3 = new Web3(web3.currentProvider);
contract = new web3.eth.Contract(abi, address);

$(document).ready(function () {
    // This function execute when addStudent button is pressed
    $("#_addStudent").click(function () {
        web3.eth
            .getAccounts()
            .then(function (accounts) {
                var acnt = accounts[0];
                var sid = $("#_rollno").val();
                var name = $("#_name").val();
                var attendance = $("#_attendance").val();

                if (sid && name && attendance) {
                    var n = 1;
                    return contract.methods
                        .addStudent(sid, name, attendance)
                        .send({ from: acnt });
                }
                else {
                    $(".addS").text('Fill details correctly!');
                    window.onload;
                }
            })
            .then(function (trx) {
                console.log(trx);
                if (n)
                    $(".addS").text('Student attendance is successfully added!');
            });
    });

    // This function execute when addAttendance button is pressed
    $("#_addAtt").click(function () {
        web3.eth
            .getAccounts()
            .then(function (accounts) {
                var acnt = accounts[0];
                var sid = $("#_rollnoA").val();
                if (sid) {
                    var n = 1;
                    return contract.methods.addAttendance(sid).send({ from: acnt });
                }
                else {
                    $(".addA").text('Fill detail correctly!');
                }
            })
            .then(function (trx) {
                console.log(trx);
                if (n)
                    $(".addA").text('Attendance is updated!');
            });
    });

    // This function execute when ViewAttendance button is pressed
    $("#_view").click(function () {
        var rollno = parseInt($("#_rollnoV").val());
        if (rollno) {
            contract.methods.viewAttendance(rollno).call(function (err, res) {
                if (err) {
                    console.log();
                }
                if (res[1]) {
                    $(".viewA").text('Name: ' + res[1] + ', Attendance: ' + res[2]);
                    console.log(res);
                }
                else
                    $(".viewA").text('Fill valid student Id!');
            });
        }
        else
            $(".viewA").text('Fill detail correctly!');
    });

    // This function execute when addAdmin button is pressed
    $("#_addAdmin").click(function () {
        web3.eth
            .getAccounts()
            .then(function (accounts) {
                var acnt = accounts[0];
                var address = $("#_address").val();
                if (address) {
                    var n = 1;
                    return contract.methods.addAdmin(address).send({ from: acnt });
                }
                else
                    $(".addAd").text('Fill detail correctly!');
            })
            .then(function (trx) {
                console.log(trx);
                if (n)
                    $(".addAd").text('Admin is successfully added!');
            });
    });
});

// Javascript for Animation
var addSdt = document.getElementById("addStudent");
var addAtd = document.getElementById("addAttendance");
var viewAtd = document.getElementById("viewAttendance");
var addAdn = document.getElementById("addAdmin");
var btn = document.getElementById("btn");

function addStudent() {
    addSdt.style.left = "50px";
    addAtd.style.left = "450px";
    viewAtd.style.left = "-380px";
    addAdn.style.left = "450px";
    btn.style.top = "0";
    $(".dialoge-box").text('');
}

function addAttendance() {
    addSdt.style.left = "450px";
    addAtd.style.left = "50px";
    viewAtd.style.left = "-380px";
    addAdn.style.left = "450px";
    btn.style.top = "37px";
    $(".dialoge-box").text('');
}

function viewAttendance() {
    addSdt.style.left = "-380px";
    addAtd.style.left = "450px";
    viewAtd.style.left = "50px";
    addAdn.style.left = "450px";
    btn.style.top = "74px";
    $(".dialoge-box").text('');
}

function addAdmin() {
    addSdt.style.left = "450px";
    addAtd.style.left = "450px";
    viewAtd.style.left = "-380px";
    addAdn.style.left = "50px";
    btn.style.top = "108px";
    $(".dialoge-box").text('');
}
//   addStudent
//   addAttendance
//   viewAttendance
//   addAdmin