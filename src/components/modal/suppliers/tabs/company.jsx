export default function Company({ CustomInput }) {
  return (
    <div className='flex gap-3 flex-col p-[10px]'>
      <CustomInput label='Ruc' textKey='ruc' />
      <CustomInput label='N° Comercial' textKey='numberComercial' />
      <CustomInput label='Razon Social' textKey='social' />
    </div>
  );
}
