<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Model\WingVanModel\WingVanLocation;
Use App\Model\WingVanModel\WingVanLocationRate;
Use Illuminate\Support\Facades\Hash;
class WingVanLocationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    // public function __construct()
    // {
    //     $this->middleware('auth:api');
    // }

    public function index()
    {
        $datas = [];
        $temp =[];
        $all = WingVanLocation::all();
        foreach( $all as $a )
        {
            $temp['id'] = $a->id;
            $temp['name'] = $a->name;
            $temp['description'] = $a->description;
            $temp['mat_code'] = $a->mat_code;
            $temp['activity'] = $a->activity;
            $rate = WingVanLocationRate::where(['loc_id'=>$a->id,'status'=>'ACTIVE'])->first();
            $temp['rate'] = $rate['rate'] ? $rate['rate'] : 0;

            array_push($datas,$temp);
        }
        return ['data'=>$datas];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        return WingVanLocation::create($request->all());
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
    public function update(Request $request, $id)
    {
        //
        $user = WingVanLocation::FindOrFail($id)->update($request->all());
        return ['message'=>'Data updated'];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $user =  WingVanLocation::FindOrFail($id)->delete();

        return ['message'=>'Deleted']; 
    }
    
    public function get_rate($id){
        return ['data'=>WingVanLocationRate::where(['loc_id'=>$id,'status'=>'ACTIVE'])->first()];
    }
    public function add_rate(Request $request)
    {
        WingVanLocationRate::where('loc_id',$request['loc_id'])->update(['status'=>'PREVIEW']);

        $request['status'] = 'ACTIVE';

        return WingVanLocationRate::create($request->all());
    }
}
