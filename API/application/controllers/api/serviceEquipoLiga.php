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

class ServiceEquipoLiga extends REST_Controller
{
    function user_get()
    {
        $query = "";
        if($this->get('idEquipoLiga'))
        {
            if($this->checkExist($this->get('idEquipoLiga'))){
              $query = "SELECT * FROM tbl_Equipo_Liga where int_Id_Equipo_Liga ='".$this->get('idEquipoLiga')."';";
            }
            else{
                $this->response(array('error' => 'El Equipo_Liga no existe'), 404);
            }
        }
        else{
            $query = "SELECT * FROM tbl_Equipo_Liga;";
        }

        $queryRes = $this->db->query($query);
        $users = array();
        $user = array();
        if ($queryRes->num_rows() > 0)
        {
            foreach ($queryRes->result() as $row)
            {
               $user['id'] = $row->int_Id_Equipo_Liga; // call attributes ID
               $user['id_Equipo'] = $row->int_Id_Equipo; // call attributes Id_Equipo
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
            $this->response(array('error' => 'Equipo_Liga could not be found'), 404);
        }
    }
    
    function user_post()
    {
        $query = "";
        $info = json_decode(file_get_contents('php://input'), true);
        $data = array(
                   'int_Id_Equipo' => $info['data']['id_Equipo'],
                   'int_Id_Liga' => $info['data']['id_Liga']
                );
        switch ($info['data']['action']) {
            case 'add':
                    $query = $this->db->insert('tbl_Equipo_Liga', $data); 
                break;
            case 'update':
                if($this->checkExist($info['data']['idEquipoLiga'])){
                    $query = $this->db->update('tbl_Equipo_Liga', $data, array('int_Id_Equipo_Liga' => $info['data']['idEquipoLiga'])); 
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
        $query = $this->db->delete('tbl_Equipo_Liga', array('int_Id_Equipo_Liga' => $info['data']->idEquipo_Liga)); 
        $this->response($query, 200); // 200 being the HTTP response code
    }

    function checkExist($id){
        $query = $this->db->get_where('tbl_Equipo_Liga', array('int_Id_Equipo_Liga' => $id));
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