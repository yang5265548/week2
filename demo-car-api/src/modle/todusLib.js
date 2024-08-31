// {
//     "task": "Buy groceries",
//     "completed": false,
//     "dueDate": "2024-08-30"
// }

let todosArray=[]
let todoid=1


function addOne(task,completed,dueDate){
    if(!task || completed===undefined || !dueDate){
        return false;
    }

    const newToDo={
        id: todoid++,
        task,
        completed,
        dueDate
    }
    todosArray.push(newToDo)
    return newToDo
    
}
function findById(id) {
    const numericId = Number(id); // Converts the ID to a number
    const tos = todosArray.find(item => item.id === numericId); // 
    return tos || false; // 
}


function getAll() {
    return todosArray;
}
function updateOneById(id, updatedData) {
    const tos = findById(id);
    if (tos) {
        // Update properties only if they are provided in updatedData
        if (updatedData.task) tos.task = updatedData.task;
        if (updatedData.completed) tos.completed = updatedData.completed;
        if (updatedData.dueDate) tos.dueDate = updatedData.dueDate;
        return tos; // Returns the updated car object
    }
    return false; // Returns false if the car with the provided ID is not found
}

function deleteOneById(id) {
    const tos = findById(id);
    if (tos) {
        const initialLength = todosArray.length;
        todosArray = todosArray.filter(tos => tos.id !== Number(id)); // Filters out the car with the matching ID
        return todosArray.length < initialLength; // Returns true if the array length decreased, indicating successful deletion
    }
    return false; // Returns false if the car was not found
}
if (require.main === module) {
    let result = addOne("Buy groceries",false,"2024-08-30")
    console.log(result);
    result = addOne("Buy car", "false", "2024-08-31");
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    console.log("getAll called:", getAll());

    console.log("findById called:", findById(1));

    console.log("updateOneById called:", updateOneById(1, { dueDate: '2024-09-30', completed: "true" }));
    console.log("findById called after item updated:", findById(1));

    console.log("deleteOneById called:", deleteOneById(1));
    console.log("findById called after item deleted:", findById(1));
}



const ToDos = {
    getAll,
    addOne,
    findById,
    updateOneById,
    deleteOneById
};

module.exports = ToDos;