function DataArrayChange(data)
{
    let d = [];
    Array.isArray(data) ? d.push(...data) : d.push(data);
    
    return d;
}

export default DataArrayChange;

// 받은 데이터를 배열 형태로 변환하는 것