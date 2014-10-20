<?php 

/**
 * Example
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package     CodeIgniter
 * @subpackage  Rest Server
 * @category    Controller
 * @author      Phil Sturgeon
 * @link        http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH.'/libraries/REST_Controller.php';

class ServicePartido extends REST_Controller
{
    function user_get()
    {
        $query = "";
        if($this->get('idPartido'))
        {
            if($this->checkExist($this->get('idPartido'))){
              $query = "SELECT * FROM tbl_Partido where int_Id_Partido ='".$this->get('idPartido')."';";
            }
            else{
                $this->response(array('error' => 'El Partido no existe'), 404);
            }
        }
        else{
            if($this->get('fechaPartido')){
                  $getDate = date_create_from_format('d/M/Y H:i:s', $this->get('fechaPartido'));
                  $dateLimit = $getDate;
                  $dateLimit->add(new DateInterval('d7'));
                  $query = "SELECT * FROM tbl_Partido where `datetime_Fecha` BETWEEN '".$getDate."' and '".$dateLimit."'";
                  if($this->get('idLiga')){
                      $query+= " and `int_Id_Liga` = '".$this->get('idLiga')."'";
                  }
                  $query+= ";";
            }
            else{
                $query = "SELECT * FROM tbl_Partido;";
            }
        }

        $queryRes = $this->db->query($query);
        $users = array();
        $user = array();
        if ($queryRes->num_rows() > 0)
        {
            foreach ($queryRes->result() as $row)
            {
               $user['id'] = $row->int_Id_Partido; // call attributes ID
               $user['id_Equipo1'] = $row->int_Id_Equipo1; // call attributes Id_Equipo1
               $user['id_Equipo2'] = $row->int_Id_Equipo2; // call attributes Id_Equipo2
               $user['goles_Equipo1'] = $row->int_Goles_Equipo1; // call attributes goles_Equipo1
               $user['goles_Equipo2'] = $row->int_Goles_Equipo2; // call attributes goles_Equipo2
               $user['fecha'] = $row->datetime_Fecha; // call attributes fecha
               $user['id_Liga'] = $row->int_Id_Liga; // call attributes id Liga
               array_push($users,$user);
            } 
        }
        
        if($users)
        {
            $this->response($users, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Partido could not be found'), 404);
        }
    }
    
    function user_post()
    {
        $query = "";
        $info = json_decode(file_get_contents('php://input'), true);
        $data = array(
                   'int_Id_Equipo1' => $info['data']['id_Equipo1'],
                   'int_Id_Equipo2' => $info['data']['id_Equipo2'],
                   'int_Goles_Equipo1' => $info['data']['goles_Equipo1'],
                   'int_Goles_Equipo2' => $info['data']['goles_Equipo2'],
                   'datetime_Fecha' => $info['data']['fecha'],
                   'int_Id_Liga' => $info['data']['id_Liga']
                );
        switch ($info['data']['action']) {
            case 'add':
                    $query = $this->db->insert('tbl_Partido', $data); 
                break;
            case 'update':
                if($this->checkExist($info['data']['idPartido'])){
                    $query = $this->db->update('tbl_Partido', $data, array('int_Id_Partido' => $info['data']['idPartido'])); 
                }
                else{
                    $query = "error no existe";
                }
                break;
            
            default:
                # code...
                break;
        }
        
        $this->response($query, 200); // 200 being the HTTP response code
    }
    
    function user_delete()
    {
        $query = "";
        $info['data'] = $this->post('info');
        $query = $this->db->delete('tbl_Partido', array('int_Id_Partido' => $info['data']->idPartido)); 
        $this->response($query, 200); // 200 being the HTTP response code
    }

    function checkExist($id){
        $query = $this->db->get_where('tbl_Partido', array('int_Id_Partido' => $id));
        if($query->num_rows()>0)
            return true;
        return false;
    }
    

    public function send_post()
    {
        var_dump($this->request->body);
    }


    public function send_put()
    {
        var_dump($this->put('foo'));
    }
}