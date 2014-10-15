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

class ServiceUsuarioPartido extends REST_Controller
{
    function user_get()
    {
        $query = "";
        if($this->get('idUsuarioPartido'))
        {
            if($this->checkExist($this->get('idUsuarioPartido'))){
              $query = "SELECT * FROM tbl_Usuario_Partido where int_Id_Usuario_Partido ='".$this->get('idUsuarioPartido')."';";
            }
            else{
                $this->response(array('error' => 'El Usuario_Partido no existe'), 404);
            }
        }
        else{
            $query = "SELECT * FROM tbl_Usuario_Partido;";
        }

        $queryRes = $this->db->query($query);
        $users = array();
        $user = array();
        if ($queryRes->num_rows() > 0)
        {
            foreach ($queryRes->result() as $row)
            {
               $user['id'] = $row->int_Id_Usuario_Partido; // call attributes ID
               $user['id_Usuario'] = $row->int_Id_Usuario; // call attributes Id_Usuario
               $user['id_Partido'] = $row->int_Id_Partido; // call attributes Id_Partido
               $user['goles_Equipo1'] = $row->int_Goles_Equipo1; // call attributes goles_Usuario
               $user['goles_Equipo2'] = $row->int_Goles_Equipo2; // call attributes goles_Partido
               array_push($users,$user);
            } 
        }
        
        if($users)
        {
            $this->response($users, 200); // 200 being the HTTP response code
        }

        else
        {
            $this->response(array('error' => 'Usuario_Partido could not be found'), 404);
        }
    }
    
    function user_post()
    {
        $query = "";
        $info = json_decode(file_get_contents('php://input'), true);
        $data = array(
                   'int_Id_Usuario' => $info['data']['id_Usuario'],
                   'int_Id_Partido' => $info['data']['id_Partido'],
                   'int_Goles_Equipo1' => $info['data']['goles_Equipo1'],
                   'int_Goles_Equipo2' => $info['data']['goles_Equipo2']
                );
        switch ($info['data']['action']) {
            case 'add':
                    $query = $this->db->insert('tbl_Usuario_Partido', $data); 
                break;
            case 'update':
                if($this->checkExist($info['data']['idUsuarioPartido'])){
                    $query = $this->db->update('tbl_Usuario_Partido', $data, array('int_Id_Usuario_Partido' => $info['data']['idUsuarioPartido'])); 
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
        $query = $this->db->delete('tbl_Usuario_Partido', array('int_Id_Usuario_Partido' => $info['data']->idUsuario_Partido)); 
        $this->response($query, 200); // 200 being the HTTP response code
    }

    function checkExist($id){
        $query = $this->db->get_where('tbl_Usuario_Partido', array('int_Id_Usuario_Partido' => $id));
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