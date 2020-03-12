# Generated by Django 3.0.2 on 2020-03-12 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Vplan_schueler',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pos', models.IntegerField(verbose_name='Unterichtsstunde')),
                ('fach', models.CharField(max_length=100, verbose_name='Fach')),
                ('raum', models.CharField(max_length=100, verbose_name='Raum')),
                ('klasse', models.CharField(max_length=100, verbose_name='Klasse')),
                ('info', models.CharField(max_length=100, verbose_name='Informationen')),
                ('art', models.CharField(max_length=100, verbose_name='Art')),
            ],
        ),
    ]
