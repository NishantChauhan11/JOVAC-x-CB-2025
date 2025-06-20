console.log("Start making tea");

function boilWater(callback) {
    console.log("Boil water");
    setTimeout(callback, 1000);
}

function addTeaLeaves(callback) {
    console.log("Add tea leaves");
    setTimeout(callback, 2000);
}

function addSugar(callback) {
    console.log("Add sugar");
    setTimeout(callback, 3000);
}

function addMilk(callback) {
    console.log("Add milk");
    setTimeout(callback, 4000);
}

function letItBoil(callback) {
    console.log("Let it boil");
    setTimeout(callback, 5000);
}

function Serve() {
    console.log("serve the tea");
}


boilWater(() => {
    addTeaLeaves(() => {
        addSugar(() => {
            addMilk(() => {
                letItBoil(() => {
                    Serve();
                });
            });
        });
    });
});
