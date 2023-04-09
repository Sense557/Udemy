/**
 *  Constructor Function
 */


function SecurityGuard (name, yearsOfExperience, work){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.work = work;
    this.clean = function () {
        alert("cleaning is in progress");
    }
}
    