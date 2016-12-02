package net.common.utils.filegenerator;

import java.io.*;
import java.util.Random;

/**
 * Created by Ajay on 27/11/2016.
 */
public class FileGenerator {
    public static File file;

    public static void generateFile(String fileName, String size){
        try {
        //Size in Gbs of my file that I want
        double wantedSize = Double.parseDouble(System.getProperty("size", size));
        Random random = new Random();
        file = new File(fileName);
        System.out.println(file.getAbsoluteFile());
        long start = System.currentTimeMillis();
        PrintWriter writer = null;
         writer = new PrintWriter(new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), "UTF-8")), false);
        int counter = 0;
        while (true) {
            String sep = "";
            for (int i = 0; i < 100; i++) {
                int number = random.nextInt(1000) + 1;
                writer.print(sep);
                writer.print(number / 1e3);
                sep = " ";
            }
            writer.println();
            //Check to see if the current size is what we want it to be
            if (++counter == 20000) {
//                System.out.printf("Size: %.3f GB%n", file.length() / 1e9);
                if (file.length() >= wantedSize * 1e9) {
                    writer.close();
                    break;
                } else {
                    counter = 0;
                }
            }
        }
        long time = System.currentTimeMillis() - start;
        System.out.printf("Took %.1f seconds to create a file of %.3f GB", time / 1e3, file.length() / 1e9);
    } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }}
}
