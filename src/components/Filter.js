import styles from './Filter.module.css';

export function Filter({filterText, handleFilterText, departmentsList, selectedFilterDepartment, handleFilterDepartment, handleFilterReset}) {
   if (departmentsList.length === 0) return;   
   const shopDepartmentsList = departmentsList.map(department => <option key={department} value={department}>{department}</option>);   
   return (
      <form className={styles.filter}>
         <div>
            <label htmlFor='filter-text'>Filter: </label>
            <input type='text' id='filter-text' placeholder='Enter filter query' value={filterText} onChange={handleFilterText} />
         </div>
         <div>
            <label htmlFor='departments'>Department: </label>
            <select id='departments' value={selectedFilterDepartment} onChange={handleFilterDepartment}>
               <option key='000' value=''>All Departments</option>
               {shopDepartmentsList}
            </select>
         </div>
         <button onClick={handleFilterReset}>Reset filter</button>
      </form>
   )
}