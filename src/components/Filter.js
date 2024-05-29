import styles from './Filter.module.css';

export function Filter({filterText, handleFilterText, departmentsList, selectedFilterDepartment, handleFilterDepartment}) {
   if (departmentsList.length === 0) return;
   const shopDepartmentsList = departmentsList.map(department => <option value={department}>{department}</option>)
   return (
      <form className={styles.filter}>
         <label htmlFor='filter-text'>Filter: </label>
         <input type='text' id='filter-text' placeholder='Enter filter query' value={filterText} onChange={handleFilterText} />
         <label htmlFor='departments'>Department: </label>
         <select id='departments' value={selectedFilterDepartment} onChange={handleFilterDepartment}>
            {shopDepartmentsList}
         </select>
      </form>
   )
}