import java.util.Arrays;

public class TesteUm {

	public static void main(String[] args) {
		int[] v = new int[]{7, 5, 3, 1, 3, 4};
		int dif = 2;
		int quant = 0;
		int ant = 0;
		int cont;
		
		Arrays.sort(v);
		
		
		ant = v[0];
		for(int x=1; x<v.length; x++) {
			cont = v[x] - ant;
			
			if(cont == dif) {
				quant++;
				System.out.println(v[x] + " e " + ant);
				
				ant = v[x];
			}
			
		}
		
		System.out.println(quant);
		
		
	}

}