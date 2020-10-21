<?php

namespace App\Http\Controllers\OVLControllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\OVLModel\OVLVehicleCollectionPaymentDTL;
use DB;
class OVLVehicleCollectionPaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return OVLVehicleCollectionPaymentDTL::latest()->paginate(0);
        /*return DB::table('tblmotorvehiclelist')
        ->select('PlateNumber','DriverName','OperatorName','EngineNumber','SerialNumber')
        ->orderBy('id', 'desc')
        ->paginate(7);*/
    }
    public function getOVLVehicleCollectionPayment(Request $request)
    {
        $idsajvcp= $request['OVLVLHDRID_Link'];
        $modalsejvcp = new OVLVehicleCollectionPaymentDTL();
        $jvcp = $modalsejvcp->getJVCPJVCP($idsajvcp);
        return $jvcp;
        /*$JeepIDLink = $request['JeepIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $JeepIDLink");
        return $data;*/
    }

    public function deleteEntirePaymentDetail(Request $request)
    {
        $idsajvcp= $request['OVLVLHDRID_Link'];
        $modalsejvcp = new OVLVehicleCollectionPaymentDTL();
        $jvcp = $modalsejvcp->getDelEntPay($idsajvcp);
        return $jvcp;
        /*$JeepIDLink = $request['JeepIDLink'];
        $data = DB::select("SELECT * from tblmotorvehiclerentalrate where MVID_Link= $JeepIDLink");
        return $data;*/
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        date_default_timezone_set('Asia/Manila');

       /* $this->validate($request,[
            'PlateNumber' => 'required|string|max:50',
            'EngineNumber' => 'required|string|max:50',
            'SerialNumber' => 'required|string|max:50',
            'AssetNumber' => 'required|string|max:50',
            'DriverName' => 'required|string|max:50',
            'OperatorName' => 'required|string|max:50',
            'GSCUnit' => 'required|string|max:1'
        ]);*/
        //return $jvl = JeepVehicleLogHDR::create($request->all());
        return OVLVehicleCollectionPaymentDTL::create([
            'OVLVLHDRID_Link' => $request['OVLVLHDRID_Link'],
            'CollectedAmount' => strtoupper($request['CollectedAmount']),
            'ORCRDate' => strtoupper($request['ORCRDate']),
            'ORCRNumber' => strtoupper($request['ORCRNumber']),
            'Remarks' => $request['Remarks'],
            'EncodedBy' => strtoupper($request['EncodedBy']),
            'EncodedDateTime' => strtoupper($request['EncodedDateTime']),
            'ModeOfPayment' => strtoupper($request['ModeOfPayment']),
            'CheckNumber' => strtoupper($request['CheckNumber']),
            'CheckDate' => strtoupper($request['CheckDate'])
            /*'CollectedAmount' => number_format($request['CollectedAmount'],2,".",","),
            'BalanceAmount' => number_format($request['BalanceAmount'],2,".",","),
            'ORCRNumber' => $request['ORCRNumber'],
            'ORCRDate' => $request['ORCRDate'],
            'remarks' => $request['remarks'],
            'status' => strtoupper($request['status']),
            'EncodedBy' => strtoupper($request['EncodedBy']),
            'SOAID_Link' => $request['EncodedDateTime'],
            'SOANumber' => $request['EncodedDateTime'],
            'SOADate' => $request['SOADate']*/
        ]);
       /* $PlateNumber = strtoupper($request['PlateNumber']);
        $EngineNumber = strtoupper($request['EngineNumber']);
        $SerialNumber = strtoupper($request['SerialNumber']);
        $AssetNumber = strtoupper($request['AssetNumber']);
        $Type = strtoupper($request['Type']);
        $DriverName = strtoupper($request['DriverName']);
        $DriverID = strtoupper($request['DriverID']);
        $OperatorName = strtoupper($request['OperatorName']);
        $OperatorID = strtoupper($request['OperatorID']);
        date_default_timezone_set('Asia/Manila');
        $updated_at=date("Y-m-d H:i:s"); 
        $created_at=date("Y-m-d H:i:s"); 

        $data= DB::select("INSERT INTO tblmotorvehiclelist (PlateNumber,EngineNumber,SerialNumber,AssetNumber,Type,DriverName,DriverID,OperatorName,OperatorID,created_at,updated_at)VALUES('$PlateNumber','$EngineNumber','$SerialNumber','$AssetNumber','$Type','$DriverName','$DriverID','$OperatorName','$OperatorID','$updated_at','$created_at')");
        return $data;*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $JVCDTLID)
    {
        /*$this->validate($request,[
            'PlateNumber' => 'required|string|max:50',
            'EngineNumber' => 'required|string|max:50',
            'SerialNumber' => 'required|string|max:50',
            'AssetNumber' => 'required|string|max:50',
            'Type' => 'required|string|max:20',
            'DriverName' => 'required|string|max:50',
            'OperatorName' => 'required|string|max:50',
            'GSCUnit' => 'required|string|max:1',
        ]);*/

        date_default_timezone_set('Asia/Manila');
        $jvl= OVLVehicleCollectionPaymentDTL::findOrFail($JVCDTLID);
        //$driver->update($request->all());
        $jvl->update([
            'OVLVLHDRID_Link' => $request['OVLVLHDRID_Link'],
            'CollectedAmount' => strtoupper($request['CollectedAmount']),
            'ORCRDate' => strtoupper($request['ORCRDate']),
            'ORCRNumber' => strtoupper($request['ORCRNumber']),
            'Remarks' => $request['Remarks'],
            'EncodedBy' => strtoupper($request['EncodedBy']),
            'EncodedDateTime' => strtoupper($request['EncodedDateTime']),
            'ModeOfPayment' => strtoupper($request['ModeOfPayment']),
            'CheckNumber' => strtoupper($request['CheckNumber']),
            'CheckDate' => strtoupper($request['CheckDate'])
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $jvl = OVLVehicleCollectionPaymentDTL::findOrFail($id);
        $jvl->delete();
    }
    public function search()
    {
        if($search = \Request::get('q')){
            $jvl = OVLVehicleCollectionPaymentDTL::where(function($query) use ($search){
                $query->where('ORCRNumber','LIKE',"%$search%");
            })->paginate(5);
        }else{
            $jvl = OVLVehicleCollectionPaymentDTL::latest()->paginate(7);
        }

        return $jvl;
    }
    public function getAll(){
        return OVLVehicleCollectionPaymentDTL::all();
    }
}