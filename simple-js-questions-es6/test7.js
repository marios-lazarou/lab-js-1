/* Question 1:
 * Basically this is a simple class, which is based on receiving a keyword value of type string 
 * and adding it to a holding array (keywords), in case it hasn't been added before, as well as removing a keyword 
 * from the holding array, on demand.  Furthermore, there are also checks, that are responsible for checking if 
 * the keyword passed is a valid string or not, before actually deciding whether to add it to the array or not.
 * 
 * Question 2:
 * Yes, there is redundancy in this code.  First of all, it is not necessarry
 * to use two variables to hold the value of the passing keyword (parameter) (line 7).
 * Second, based on point one, the check of the second (non-necessary variable) 'input', again is not needed, 
 * because there is no point of having that check (lines 13-15).  In fact, the only checks that are required are to check
 * if the parameter passed is a valid value and of type string and if this check succeeds, then we move on checking if the
 * keyword is already contained in the holding keywords array, in order to add it or not.
 * Also, there is not point of using the 'trim()' function twice.
 * 
 * Furthermore, there is no point of declaring and editing a boolean variable in the 'keywordExists(value)' - 
 * 'entryExists'(line 19).  Nor we need to have a for loop to iterate over the holding array, since we can just use
 * the 'filter' method and use a conditiong to check for the value we need exists in the array.
 * Additionally, we simply return true or false with a simple condition, based on the result of the filtering,
 * explained above.
 * 
 * Finally, we just need to add a simple check to ensure that the 'target' parameter passed is of type number, in the 
 * 'remove(target)' function.
 */

class Mystery {

    add(event) {
        if (event && typeof event === 'string') {
            const keyword = event.trim();
            if (!this.keywordExists(keyword)) {
                this.keywords.push({
                    value: keyword
                });
            }
        }
    }

    keywordExists(keyword) {
        const entryExists = this.keywords.filter((entry) => {
            return entry.value === keyword;
        });
        return entryExists.length > 0 ? true : false;
    }

    remove(target) {
        if (target) {
            const index = this.keywords.indexOf(target);
            if (index >= 0) {
                this.keywords.splice(index, 1);
            }
        }
    }

}