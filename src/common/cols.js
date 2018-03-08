
function addRemove(col) {
    return (element) => {

        col.push(element);

        return () => remove1Mutate(col, element);
    };
}

function remove1Mutate(col, targetElem) {
    if (col== null) {
        return;
    }

    let i = col.indexOf(targetElem);
    if (i == -1) {
        return;
    }
    col.splice(i, 1);
}

const Cols = {
    addRemove,
};

exports.Cols = Cols;