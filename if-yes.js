export default function ifYes(str){
    if (str.toLowerCase() === 'yes' || str.toLowerCase() === 'y'){
        return true;
    } else {
        return false;
    }
}
